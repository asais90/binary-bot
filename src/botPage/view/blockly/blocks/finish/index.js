// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#i7qkfj
import { translator } from '../../../../../common/translator';
import './result';
import './check_result';
import './details';
import './read_details';
import './trade_again';

Blockly.Blocks.on_finish = {
  init: function init() {
    this.appendDummyInput()
      .appendField(translator.translateText('(4) things to do after purchase is finished'));
    this.appendStatementInput('FINISH_STACK')
      .setCheck('TradeAgain');
    this.setColour('#2a3052');
    this.setTooltip(translator.translateText('This block decides what to do when a purchased contract is finished')); // eslint-disable-line max-len
    this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
  },
};
Blockly.JavaScript.on_finish = (block) => {
  const stack = Blockly.JavaScript.statementToCode(block, 'FINISH_STACK');
  const code = `function on_finish(_finishedContract, details){
    try {
      ${stack}
    } catch (e) { 
      if (e.name === 'BlocklyError') {
        // pass
      } else {
        throw e;
      }
    }
    Bot.stop();
  }
  `;
  return code;
};