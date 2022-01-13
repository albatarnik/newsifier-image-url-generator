import { BasePrcessor } from "./base-prcessor";

export class ImgProxy extends BasePrcessor
{

    prepareUrl()
    {
        let template = "{domain}/{sign}/resizing_type:fill/{watermark}/{width}/{height}/plain/{url}";
        template = template.replace("{domain}",this.host);
        template = template.replace("{sign}","Acbs8526SDKI");
        template = template.replace("{url}",this.url);

        this.url = template
    }
    

    prepareOptions()
    {
        if( BasePrcessor.AR in this.render_options )
        {
            if( BasePrcessor.W in this.render_options )
            {
                let ar = this.render_options[BasePrcessor.AR].split(':');
                if( ar && ar.length == 2 )
                {
                    let h = (ar[1]/ar[0]) * this.render_options[BasePrcessor.W];
                    if( h ) 
                    {
                        h = Math.round(h);
                        this.render_options[BasePrcessor.H] = h;
                    }
                }
            }
        }
    }

    width(val)
    {
        let to = val ? "/width:"+val: "";
 
        this.url = this.url.toString().replace("/{width}",to);
    }

    height(val)
    {
        let to = val ? "/height:"+val: "";
    
        this.url = this.url.replace("/{height}",to);
    }
    watermark(val)
    {
        if( val )
            val = encodeURIComponent(val)
        let to = val ? "/watermark:"+val: "";
        this.url = this.url.replace("/{watermark}",to);
    }

}
