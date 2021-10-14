import { BasePrcessor } from "./base-prcessor";
import { Imagix } from "./imagix";
import { ImgProxy } from "./img-proxy";

export class Resizer
{
    protected service:string;
  
    protected service_host:string;
    /**
     * 
     * @param service 
     * @param service_host 
     */
    constructor(service:string, service_host:string )
    {
        this.service_host = service_host
        this.service = service
    }

    resize(image_url : String ,render_options :any)
    {
        if( !render_options ) render_options = {}
        let processor = this.getProcessor(image_url ,{service:this.service,host:this.service_host} , render_options )
        return processor.getParsedUrl();
    }

    getProcessor(image_url : String,config :any,render_options :any )
    {
        let processor = new ImgProxy(image_url,config.host,render_options);
        if(config.service === BasePrcessor.IMGIX )
            processor = new Imagix(image_url,config.host,render_options);
        return processor;
    }
}