let { onCommand, loadLanguage } = require('../main/');
let api = require('../main/api');
let { wiki_desc, wiki_need, wiki_invalid, wiki_result } = loadLanguage();

onCommand(
  {
   command: 'wiki',
   desc: wiki_desc,
   category: ['misc']
  }, async (msg, text, client) => {

  if (!text[1]) return await msg.reply(wiki_need);
  let wiki = await api.wikipedia(text[1]), info = '';
  if (!wiki) info = wiki_invalid;
  info = wiki_result.format(wiki.title, wiki.info, wiki.url);
  return await msg.reply(info);
});
