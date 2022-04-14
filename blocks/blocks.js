Blockly.defineBlocksWithJsonArray(
  [
    {
      "type": "RC_setup",
      "message0": "Start Bluetooth setup",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#40a18a",
      "tooltip": "",
      "helpUrl": ""
    }, 
    {
    "type": "RC_Send",
    "message0": "RC Send  %1 ",
    "args0": [
      {
        "type": "input_value",
        "name": "text"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#2980B9",
    "tooltip": "RC Receive message ",
    "helpUrl": ""
  },
  {
    "type": "RC_Recived",
    "message0": "When RC Receive %1 %2 %3",
    "args0": [
        {
          "type": "input_value",
          "name": "text"
        },
        {
        "type": "input_dummy"
        },
        {
        "type": "input_statement",
        "name": "callback"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#1d5599",
      "tooltip": "",
      "helpUrl": ""
  },

  ]
  );
  