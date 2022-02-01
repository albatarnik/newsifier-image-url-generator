import { BasePrcessor } from "./base-prcessor";

export class Imagix extends BasePrcessor
{
 
    
    prepareUrl()
    {
       // const { protocol, host, port } = url.parse(this.url);
       // this.url = this.url.replace(host,this.host);
    }

    width(val)
    {
        if( val ) this.addToUrl("w=" + val);
    }
    height(val)
    {
        if( val ) this.addToUrl("h=" + val);
    }
    crop(val)
    {
        if( val ) this.addToUrl("crop=" + val);
    }
    fit(val)
    {
        if( val ) this.addToUrl("fir=" + val);
    }
    ar(val)
    {
        if( val ) this.addToUrl("ar=" + val);
    }
    watermark(val)
    {
        if( val ) 
        {
            this.addToUrl("txt-align=right,bottom");
            this.addToUrl("txt-font=HelveticaNeue-Medium");
            this.addToUrl("txt-color=fff");
            this.addToUrl("txt64=" + btoa(val));
        }
    }
    
}
