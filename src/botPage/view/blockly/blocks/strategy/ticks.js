// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2jo335
import { insideStrategy } from '../../relationChecker';
import { translator } from '../../../../../common/translator';

Blockly.Blocks.ticks = {
  init: function init() {
    this.appendDummyInput()
      .appendField(translator.translateText('Ticks List'));
    this.setOutput(true, 'Array');
    this.setColour('#f2f2f2');
    this.setTooltip(translator.translateText('Returns the list of tick values'));
    this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki');
  },
  onchange: function onchange(ev) {
    insideStrategy(this, ev, 'Ticks List');
  },
};
Blockly.JavaScript.ticks = () => ['ticks.ticks.map(function(i){return i.quote;})', Blockly.JavaScript.ORDER_ATOMIC];