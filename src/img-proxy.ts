import { BasePrcessor } from "./base-prcessor";

export class ImgProxy extends BasePrcessor
{

    prepareUrl()
    {
        let template = "{domain}/{sign}/resizing_type:fill/{watermark}/{width}/{height}/plain/{url}";
        template = template.replace("{domain}",this.host);
        template = template.replace("{sign}","insecure");
        template = template.replace("{url}",this.url);

        this.url = template
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
        let to = val ? "/watermark:"+val: "";
        this.url = this.url.replace("/{watermark}",to);
    }

}
