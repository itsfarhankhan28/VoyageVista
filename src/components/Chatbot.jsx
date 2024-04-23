import { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with JourneyGenie",
        "botConversationDescription": "A chatbot that provides user information about the place they are travelling",
        "botId": "564b5f22-122d-43b5-aaf8-26fd854e8830",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "564b5f22-122d-43b5-aaf8-26fd854e8830",
        "webhookId": "05915be6-7951-4ed4-8cdd-5c1066e83fb4",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "JourneyGenie",
        "avatarUrl": "https://res.cloudinary.com/dn2ljrxzy/image/upload/v1711565524/fgymctifbyls1wxblc9t.png",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "showBotInfoPage": true,
        "enableConversationDeletion": true,
        "showPoweredBy": true,
        "theme": "prism",
        "themeColor": "#2563eb",
        // 'stylesheet':'https://webchat-styler-css.botpress.app/prod/code/3fcd3e4e-d5bc-4bf5-8699-14b621b3ada2/v31782/style.css'
      })
    }
  }, [])
 
  return <div id="webchat"/>
}
 
export default Chatbot