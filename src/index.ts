import { BasePrcessor } from "./base-prcessor";
import { Imagix } from "./imagix";
import { ImgProxy } from "./img-proxy";


export function getProcessor(image_url : String,config :any,render_options :any )
{
    let processor = new ImgProxy(image_url,config.host,render_options);
    if(config.service === BasePrcessor.IMGIX )
        processor = new Imagix(image_url,config.host,render_options);
    return processor;
}

export function renderImage(image_url : String,config :any,render_options :any )
{
    if(!config.service) throw new Error( 'Invalid image service' );
    if(!config.host) throw new Error( 'Invalid image service host' );
    let processor = getProcessor(image_url,config,render_options);

    return processor.getParsedUrl();
}