import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/mobile/dist/PNotifyMobile.css'

  defaultModules.set(PNotifyMobile, {});
 
  
import '@pnotify/core/dist/Material.css'
import { defaults } from '@pnotify/core'
defaults.styling = 'material';
defaults.icons = 'material'
//alert({
    //text: 'Notice me, senpai!'
//});
  



