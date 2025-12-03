import Foundation
import ConnectisSDK


class SignicatPlugin: CDVPlugin {

    
    func loginAppToApp() {
        let configuration = ConnectisSDKConfiguration.init(
            issuer: connectisConfiguration.issuer,
            clientID: connectisConfiguration.clientID,
            redirectURI: connectisConfiguration.appToAppRedirectURI,
            scopes: connectisConfiguration.appToAppScopes,
            brokerDigidAppAcs: connectisConfiguration.brokerDigidAppAcs,
            loginFlow: LoginFlow.APP_TO_APP)
        
        ConnectisSDK.logIn(sdkConfiguration: configuration, caller: self, delegate: responseController, allowDeviceAuthentication: ConnectisSDK.isDeviceAuthenticationEnabled())
    }
    
}

