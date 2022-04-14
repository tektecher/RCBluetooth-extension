({
    name: "RC Bluetooth", // Category Name
    description: "Connect RC with Bluetooth",
    author: "TekTech",
    category: "Sensors", //will be changed 
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#004098", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category

                "RC_setup",
                "RC_Recived",
                {
                    xml: `
                        <block type="RC_Send">
                            <value name="text">
                                <shadow type="text">
                                    <field name="TEXT">Hello</field>
                                </shadow>
                            </value>
                        </block>
                    `
                },
                {
                    xml: `
                        <block type="text">
                            <field name="TEXT">TURN_OFF</field>
                        </block>
                    `
                },
    ]
});
