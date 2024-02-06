type ThemeMode = "light" | "dark" | "default";
type ThemeOptions= {
    target?:string,
    themeNames?: {
        light: string,
        dark: string,
    }, 
    attribute?:string,
    startTheme?:ThemeMode,
}
export default class LightMode {
    private mode:ThemeMode ;
    private isDeviceDark :boolean = false;
    private targetElement : Element | null = null;
    private options:ThemeOptions ={
        target :"html",
        themeNames: {
            light:"light",
            dark:"dark"
        },
        attribute:"data-theme",
        startTheme:"default",
    }
    private isModeDefault():boolean{
        return this.mode==="default"
    }
    constructor(options?:ThemeOptions){
        this.options ={...this.options,...options};
        this.mode = this.options.startTheme!;
        const savedMode:string | null =  localStorage.getItem(`${this.options.target!}-theme`);
        if(savedMode ==="light" || savedMode ==="dark" || savedMode ==="default"){
            this.mode = savedMode ;
        }
        this.saveTheme();
        this.targetElement = document.querySelector(this.options.target!);

        if(this.targetElement === null){
            throw new Error(`Can't find any '${this.options.target!}' DOM element `);
        }


        
        this.getMedia();
        this.applyTheme();
    }
    private getMedia(){
        this.isDeviceDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            this.isDeviceDark = event.matches;
            if(this.isModeDefault()){
                this.applyTheme();
            }
        });
    }
    private applyTheme(){
        let theme:string= this.mode==="dark" ? this.options.themeNames?.dark! : this.options.themeNames?.light! ;
        if(this.isModeDefault()){
            theme=this.isDeviceDark ? this.options.themeNames?.dark! : this.options.themeNames?.light!;
        }
        this.targetElement?.setAttribute(this.options.attribute!,theme);
    }
    private saveTheme(){
        if(this.isModeDefault()){
            localStorage.removeItem(`${this.options.target!}-theme`);
            return
        }
        localStorage.setItem(`${this.options.target!}-theme`,this.mode);
    }
    toggleTheme(){
        if(this.isModeDefault()){
            this.mode=this.isDeviceDark ? "dark" : "light"; 
        }
        this.mode = this.mode==="dark"? "light" : "dark";
        this.saveTheme();
        this.applyTheme();
    }
    
    set theme(newMode:ThemeMode){
        this.mode = newMode;
        this.saveTheme();
        this.applyTheme();
    }
    get theme(){
        return this.mode
    }
}
