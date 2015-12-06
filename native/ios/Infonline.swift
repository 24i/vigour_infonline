//
//  Infonline.swift
//  vigour-native
//
//  Created by Thomas Vervest on 6/12/15.
//  Copyright © 2015 RxSwift. All rights reserved.
//

import Foundation

struct Infonline: VigourPluginProtocol {
    
    //MARK: - VigourPluginProtocol
    
    static let pluginId = "infonline"
    
    weak var delegate: VigourViewController?
    
    func callMethodWithName(name: String, andArguments args:NSDictionary?, completionHandler:pluginResult) throws {
        switch(name) {
        case "track":
            if (args != nil) {
                track(args!);
            }
        default:break
        }
        
        completionHandler(nil, JSObject(["succes":true]))
    }
    
    func onReady() throws -> JSObject {
        return JSObject([Infonline.pluginId:"ready"])
    }
    
    static func instance() -> VigourPluginProtocol {
        return Infonline()
    }
    
    //MARK: - Plugin implementation
    
    func track(data: NSDictionary) {
        print("<Infonline> tracking data \(data)\n")
    }
    
}