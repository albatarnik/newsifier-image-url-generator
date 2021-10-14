import { Resizer } from "./resizer";
export * from './resizer';

export function renderImage(image_url : String,config :any,render_options :any )
{
    let resizer = new Resizer(config.service,config.host)

    return resizer.resize(image_url,render_options);
}
