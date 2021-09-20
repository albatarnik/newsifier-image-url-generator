export abstract class BasePrcessor
{
    static IMGPROXY = "imgproxy";
    static IMGIX = "imgix";
    static W = "w";
    static H = "h";
    static CROP = "crop";
    static FIT = "fit";
    static AR = "ar";
    static WATERMARk = "watermark";
  
    static functionsMap()
    {
        let res = {};
        res[ BasePrcessor.W ] = "width";
        res[ BasePrcessor.H ] = "height";
        res[ BasePrcessor.CROP ] = "crop";
        res[ BasePrcessor.FIT ] = "fit";
        res[ BasePrcessor.AR ] = "ar";
        res[ BasePrcessor.WATERMARk ] = "watermark";
        return res;
    }
    protected url:string;
    protected origin:string;
    protected readyUrl:string;
    protected host:string;
    protected parsed:boolean;
    protected render_options:any;


    constructor(url, host , render_options)
    {
        this.url = url
        this.origin = url
        this.host = host
        this.parsed = false
        this.render_options = render_options
        if(!this.url) throw 'Invalid url';
        this.prepareUrl();  
        this.prepareOptions();
        this.checkReadyUrl();
        
    }
    checkReadyUrl(){}
    prepareOptions(){}
   
    abstract prepareUrl();
    
    width(val)
    {
      
    }
    height(val)
    {
      
    }
    crop(val)
    {
      
    }
    fit(val)
    {
      
    }
    ar(val)
    {
       
    }
    watermark(val)
    {
        
    }
    getParsedUrl()
    {
        if(  this.readyUrl )  return this.readyUrl;
        if(  this.parsed )  return this.url;
        this.url += this.render_options && Object.keys(this.render_options).length > 0 ? '?' : '';

        for (var key in BasePrcessor.functionsMap()) {
      
            let func = BasePrcessor.functionsMap()[key]
            
            if(  func )
            {
                let value = key in this.render_options ?  this.render_options[key] : "";
            
                this[func](value) 
            }
        }
       
        this.parsed = true;
        return this.url;
    }

    addToUrl(str)
    {
        if(str) this.url += "&" + str;
    }

}