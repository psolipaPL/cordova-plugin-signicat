import Foundation
import ConnectisSDK


class SignicatPlugin: CDVPlugin {

    
    func wtf() {
        var isDeviceAuthEnabled = ConnectisSDK.isDeviceAuthenticationEnabled()
    }

    func loginAppToApp() {

        let issuer: String = "https://pkio.broker.ng-test.nl/broker/sp/oidc"
        let clientID: String = "PRlEjCDjGEzzLimcNOYWnmxY4IWqRHe3"
        let redirectURI: String = "https://pkio.broker.ng-test.nl/broker/app/redirect/response"
        let scopes: String = "openid"
        let brokerDigidAppAcs: String = "https://pkio.broker.ng-test.nl/broker/authn/digid/digid-app-acs"
        let appToAppScopes: String = "openid idp_scoping:https://was-preprod1.digid.nl/saml/idp/metadata_app"
        let appToAppRedirectURI: String = "https://pkio.broker.ng-test.nl/broker/app/redirect/response"
        let brokerAppAcs: String = "https://pkio.broker.ng-test.nl/broker/authn/oidc/response"

        let configuration = ConnectisSDK.ConnectisSDKConfiguration.init(
            issuer: issuer,
            clientID: clientID,
            redirectURI: appToAppRedirectURI,
            scopes: appToAppScopes,
            brokerDigidAppAcs: brokerDigidAppAcs,
            loginFlow: LoginFlow.APP_TO_APP)
        
        ConnectisSDK.logIn(sdkConfiguration: configuration, caller: self, delegate: responseController, allowDeviceAuthentication: ConnectisSDK.isDeviceAuthenticationEnabled())
    }
    
}

