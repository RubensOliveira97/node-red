module.exports = {
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    flowFile: 'flows.json',
    adminAuth: {
       type: "credentials",
       users: [{
          username: "cirro",
          password: "cirro",
          permissions: "*"
       },
       {
          username: "admin",
          password: "admin",
          permissions: "*"
       }]
    },
    functionGlobalContext: {
    },
    exportGlobalContextKeys: false,
    logging: {
       console: {
          level: "info",
          metrics: false,
          audit: false
       }
    },
    // Customising the editorsdad
    editorTheme: {
       page: {
          title: "Node-RED Flow Editor"
       },
       header: {
          title: "Node-RED Flow Editor"
       },
       projects: {
          enabled: true
       }
    }
    }