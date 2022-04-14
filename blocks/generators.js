


Blockly.Python['RC_Send'] = function(block) {
  Blockly.Python.definitions_['import_RCBluetooth'] = 'import RCBluetooth';
  
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  //var value_text = block.getFieldValue('text');
  var code = `RCBluetooth.Send(str(${value_text}))\n`;
  return code;
};



Blockly.Python['RC_Recived'] = function(block) {
  Blockly.Python.definitions_['import_RCBluetooth'] = 'import RCBluetooth';
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // var dropdown_pin = block.getFieldValue('pin');
  var statements_callback = Blockly.Python.statementToCode(block, 'callback');
  var code;
  // -----------------------------
  var globals = [];
  var varName;
  var workspace = block.workspace;
  var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (block.getVars().indexOf(varName) == -1) {
      globals.push(Blockly.Python.variableDB_.getName(varName,
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  }
  // Add developer variables.
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE));
  }

  globals = globals.length ?
      Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';
  // -----------------------------

  var functionName = Blockly.Python.provideFunction_(
    value_text+'RCGetting',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(_=None):',
      globals,
      statements_callback]);

  code = `RCBluetooth.Received(${value_text}, ${functionName})\n`;
  return code;
};