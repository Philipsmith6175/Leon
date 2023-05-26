module.exports = {
 alive_desc: 'Check wheather the bot is working or not.',
 install_desc: 'Install external commands using gist url.',
 commands_desc: 'Shows all installled external commands.',
 remove_desc: 'Removes installed external command.',
 take_desc: 'Changes/sets packname and author for replied sticker.',
 getexif_desc: 'Fetches the packname and author from the replied sticker.',
 png_desc: 'Converts sticker to image.',
 mp4_desc: 'Converts sticker to video.',
 mp3_desc: 'Converts video to audio.',
 audio_desc: 'Converts ptt/voice note to audio.',
 ptt_desc: 'Converts audio to ptt/voice note.',
 vc_desc: 'Adds filters to replied audio or voice note and change its voice.',
 need_vc: '_Please reply to any audio or voice note to change voice!_',
 need_vc_type: '_Please enter a voice changer from below!_\n',
 invalid_vc_type: '*❌ Invalid voice changer, Please enter a valid voice changer from below!*\n',
 font_desc: 'Converts replied text to different fonts.',
 upload_desc: 'Uploads the replied image and fetches its url.',
 download_desc: 'Downloads the uploaded image url to an image.',
 tag_desc: 'Sends the replied message with hidden mention to all members in group.',
 cut_desc: 'Cuts the replied audio/video with provided timeline.',
 document_desc: 'Converts replied media to document.',
 tr_desc: 'Translates text to provided language using Google Translator.',
 image_desc: 'Downloads image for your query from google.',
 qr_desc: 'Converts text to qr code.',
 short_desc: 'Converts long url to short url using is.gd.',
 unshort_desc: 'Converts short url to long url.',
 tti_desc: 'Creates image from entered prompt using Artificial Intelligence.',
 ping_desc: 'Measures ping.',
 restart_desc: 'Restarts the bot.',
 shutdown_desc: 'Shutdowns the bot.',
 join_desc: 'Joins the group with replied or entered group link.',
 github_desc: 'Fetches user information from github with provided username.',
 repo_desc: 'Fetches information about the repository from the entered url.',
 ig_desc: 'Downloads posts/reels from instagram.',
 example_desc: 'Shows an example of usage of given command.',
 kick_desc: 'Removes the replied or mentioned user from group.',
 add_desc: 'Adds the replied user or entered number to group.',
 promote_desc: 'Promotes the replied or mentioned user to admin in group.',
 demote_desc: 'Demotes the replied or mentioned user to member in group.',
 link_desc: 'Fetch group invitation link.',
 revoke_desc: 'Revokes group invitation link.',
 mute_desc: 'Mutes the group chat, Only admin can send messages.',
 unmute_desc: 'Unmutes the group chat, Everyonce can send messages.',
 greet_desc: 'Set group greetings for welcoming participants, bye participants, promote participants or demote participants.',
 tagall_desc: 'Mentions every participants in the group.',
 gcinfo_desc: 'Fetches all the information about the group.',
 compliment_desc: 'Gives you a compliment.',
 joke_desc: 'Gives you a joke.',
 quote_desc: 'Gives you random quotes.',
 lyrics_desc: 'Fetches the lyrics of the given song.',
 ss_desc: 'Shares screenshot of the given website.',
 spdf_desc: 'Converts site to pdf.',
 mix_desc: 'Mixes given two emojis into one.',
 truecaller_desc: 'Searches the information about provided number in truecaller.',
 tguser_desc: 'Fetches information about telegram user.',
 tgchannel_desc: 'Fetches information about telegram channel.',
 tggroup_desc: 'Fetches information about telegram group.',
 need_username: '_Please enter any telegram user\'s username!_',
 need_group: '_Please enter any telegram group\'s username!_',
 need_channel: '_Please enter any telegram channel\'s username!_',
 user_result: '_Username_ : *{}*\n_Name_ : *{}*\n_Biography_ : *{}*\n_DM Link_ : *{}*',
 group_result: '_Username_ : *{}*\n_Name_ : *{}*\n_Description_ : *{}*\n_Members_ : *{}*\n_Online_ : *{}*\n_DM Link_ : *{}*',
 channel_result: '_Username_ : *{}*\n_Name_ : *{}*\n_Description_ : *{}*\n_Subscribers_ : *{}*\n_DM Link_ : *{}*',
 wiki_desc: 'Searches articles related to your query in wikipedia.',
 planetary_desc: 'Gives information about new things found in space by NASA.',
 pp_desc: 'Updates your profile picture with replied image.',
 jid_desc: 'Get jid of mentioned or replied user.',
 name_desc: 'Updates your profile name.',
 about_desc: 'Updates your profile about.',
 block_desc: 'Blocks mentioned or replied user.',
 anticall_msg: '*❌ Calling to this number is restricted!*',
 anticall_blockmsg: '*❌ You are not allowed to call, You are being blocked!*',
 unblock_desc: 'Unblocks mentioned or replied user.',
 blocklist_desc: 'Fetches all the contacts which you have blocked.',
 create_desc: 'Creates group with mentioned users.',
 info_desc: 'Fetches all the information about mentioned or replied user.',
 song_desc: 'Downloads song with given song name.',
 find_desc: 'Finds the song name from replied audio.',
 yta_desc: 'Downloads audio from youtube video url.',
 yts_desc: 'Searches your query in youtube.',
 video_desc: 'Fetches youtube video information from its url.',
 channel_desc: 'Fetches youtube channel information from its name.',
 sticker_desc: 'Converts replied image or video to sticker.',
 tts_desc: 'Converts text to speech using \'google text to speech\'.',
 rbg_desc: 'Removes background of the replied image using https://remove.bg/',
 gpt_desc: 'Asks your query to chat gpt.',
 missing_rbgkey: '*You haven\'t provided a rbg key yet.*\n_You can get a rbg key from_ https://www.remove.bg/dashboard#api-key',
 missing_openai: '*You haven\'t provided a openai key yet.*\n_You can get a openai key from_ https://platform.openai.com/account/api-keys',
 expired_openai: '*Your openai key has expired.*\n_You can get another by signing up a new account._',
 need_install: '_Please enter a url to install command!_',
 invalid_url_install: '*❌ Invalid URL, Please enter a valid URL to install command!*',
 unofficial_install: '*⚠️ THIS COMMAND SEEMS UNOFFICIAL, THIS MAY NOT COMPATIBLE WITH LEON*',
 invalid_gist_url: '*❌ Make sure that you have entered a valid gist url!*',
 invalid_command: '*❌ This plugin is invalid:*',
 installed_command: '*✅ Installed {} command!*',
 none_installed: '*❌ No external commands installed!*',
 need_remove: '_Please enter an installed external command name to remove!_',
 no_command_rem: '*❌ Could not found any installed external command in this name!*',
 deleted_command: '*☑️ Deleted {} command!*',
 need_command_name: '_Please enter a command name!_',
 yt_url_need: '_Please enter a youtube video url!_',
 yt_url_invalid: '*❌ Invalid url, Please enter a valid youtube video url!*',
 wiki_need: '_Please enter your query to search in wikipedia!_',
 wiki_invalid: '*❌ No articles are found related to your query!*',
 wiki_result: '_Topic_ :\n*{}*\n\n_Information_ :\n*{}*\n\n_Read More on_ - https://en.wikipedia.org/wiki/{}',
 ss_need: '_Please enter a url!_',
 invalid_url: '*❌ Invalid url! Please enter a valid url.*',
 qr_need: '_Please enter any text or url!_',
 need_image: '_Please reply to any image!_',
 need_image_only: '*❌ Reply to any image only!*',
 pp_suc: '*✅ Successfully updated profile picture!*',
 need_rt: '_Please enter or reply to any text!_',
 suc_name: '*✅ Successfully set profile name to {} !*',
 er_text: '*❌ Enter or reply to any text only!*',
 suc_about: '*✅ Succesfully set profile about to:*\n*{}*',
 block_already: '*{} is already blocked!*',
 unblocked_already: '*{} is already unblocked!*',
 blocked: '*☑️ Blocked: {}*',
 unblocked: '*✅ Unblocked: {}*',
 blocklist_null: '*You haven\'t blocked anyone yet!*',
 block_list: '*You have blocked:*\n',
 forward_desc: 'Forwards replied message to entered chat IDs.',
 need_message_forward: '_Please reply to any message to forward!_',
 need_id_forward: '_Please enter a chat id to forward!_\n_You can get it using {}id command._',
 invalid_id_forward: '*❌ You entered an invalid id:* ```{}```\n*Please enter a valid id using {}id command.*',
 unsupported_forward: '*❌ Unsupported message! This message cannot be forwarded.*',
 suc_forward: '*✅ Successfully forwarded message to:* ',
 mix_need: '_Please enter two emojis by splitting with / symbol!_',
 inv_format_mix: '*❌ Invalid format, Enter two emojis by splitting with / symbol!*',
 inv_char_mix: '*❌ Invalid character, Please enter two emoji to mix!*',
 mix_not_sup: '*❌ This emoji is not supported!*',
 restarting: '*🔁 Restarting...*',
 measuring: '*⏳ Measuring...*',
 shutting_down: '*🆙 Shutting down...*',
 shutdown_warn: '*⚠️ You won\'t be able to turn the bot on back using any of the command. Leon will restart in next 10 seconds. You can use restart command to quit shutting down.*',
 need_song: '_Please enter a song name!_',
 lyrics_nf: '*❌ Unable to find lyrics for your query!*',
 chat_gpt: '_Please enter some text to chat!_',
 need_prompt: '_Please enter a prompt!_',
 need_num: '_Please enter a number with country code!_',
 inv_num_true: '*❌ Invalid number, Please enter a valid mobile number including country code!*',
 need_ig_url: '_Please enter an instagram post url!_',
 invalid_ig_url: '*❌ Invalid url, Please enter a valid instagram post url!*',
 downloading: '*Downloading...*',
 need_text: '_Please enter some text!_',
 long_text: '*❌ Long Text, Please enter maximum 200 characters only!*',
 invalid_lang: '*❌ Invalid language, Please enter a valid language code!*\n_Type \'{}example tts\' for example._',
 tr_need: '_Please enter or reply to any text!_',
 need_lang_tr: '*❌ Please enter the language you want to translate to inside curly brackets!*\n_Type \'{}example tr\' for example._',
 need_query: '_Please enter your query!_',
 not_found_query: '*❌ Unable to fetch results for this query!*',
 banned_query: '*⚠️ This query is banned!*',
 downloading_image: '*Downloading random {} images...*',
 need_un: '_Please enter a github username!_',
 invalid_un: '*❌ Invalid username, Please enter a valid github username!*',
 need_repo: '_Please enter a git url!_',
 invalid_repo: '*❌ Invalid url, Please enter a valid git url!*',
 need_reply_iv: '_Please reply to any image or video!_',
 need_iv_only: '*❌ Reply to any image or video only!*',
 need_sticker: '_Please reply to any sticker!_',
 need_sticker_only: '*❌ Reply to any sticker only!*',
 need_pack_auth: '_Please enter packname and author by splitting with / symbol!_',
 format_error_take: '*❌ Invalid format, Please enter packname and author by splitting with / symbol!*',
 sticker_exif: '_Packname_ : *{}*\n_Author_ : *{}*',
 need_nanim_sticker: '*❌ Reply to any non-animated sticker!*',
 need_video: '_Please reply to any video!_',
 need_video_only: '*❌ Reply to any video only!*',
 need_audio: '_Please reply to any audio!_',
 need_aud_only: '*❌ Reply to any audio only!*',
 need_ptt: '_Please reply to any ptt!_',
 need_ptt_only: '*❌ Reply to any ptt only!*',
 need_reply_text: '_Please reply to any text!_',
 reply_text_only: '*❌ Reply to any text only!*',
 reply_media: '_Please reply to any message to convert to document!_',
 unsupported_media: '*❌ Unsupported message, Please reply to any media only!*',
 need_replymsg: '_Please enter or reply to any message!_',
 unsupported_replymsg: '*❌ Unsupported message, Please reply to any message!*',
 need_aud_vid: '_Please reply to any audio or video to cut!_',
 need_audvid_only: '*❌ Reply to any audio or video only!*',
 need_timeline: '_Please enter start and end second to cut!_\n*Please \'{}example cut\' for an example!*',
 greater_timeline: '*❌ Invalid timeline, Starting timeline cannot be higher than ending timeline!*',
 need_movie: '_Please enter any movie name!_',
 unable_movie: '*❌ Unable to find a movie in this name!*',
 movie_info: '_Title_ : *{}*\n_Year_ : *{}*\n_Released_ : *{}*\n_DVD Released_ : *{}*\n_Rated_ : *{}*\n_Runtime_ : *{}*\n_Genre_ : *{}*\n_Director_ : *{}*\n_Writer_ : *{}*\n_Actors_ : *{}*\n_Language_ : *{}*\n_Country_ : *{}*\n_Awards_ : *{}*\n_Ratings_ : *{}*\n_Votes_ : *{}*\n_Website_ : *{}*',
 gcinfo: '_ID_ : *{}*\n_Title_ : *{}*\n_Titled By_ : *{}*\n_Titled At_ : *{}*\n_Group Created By_ : *{}*\n_Group Created At_ : *{}*\n_Total Members_ : *{}*\n_Total Admins_ : *{}*\n_Total Participants_ : *{}*\n_Send Message_ : *{}*\n_Edit Group Info_ : *{}*\n_Disappearing Message_ : {}',
 unknown: 'Unknown',
 need_gc_subject: '_Please enter a subject/title for creating group!_',
 long_gc_subject: '*❌ Sorry, The subject/title you entered is too long, Maximum 25 characters only!*',
 suc_created_gc: '*✅ Successfully created group!*',
 info_format: '_Name_ : *{}*\n_About_ : *{}*\n\n_About Setted_ : *ON {} AT {}*\n_Number_ : *{}*',
 need_join_gc: '_Please enter a group link to join!_',
 invalid_gclink: '*❌ Invalid link, Please enter a valid group link!*',
 unable_join: '*❌ Unable to join, This may be because:*\n\n*- Invalid Group Link*\n*- I got removed from the group\n*- Group link revoked*\n*- Group does not exists*',
 unable_join_inv: '*❌ Unable to join, This may be because:*\n\n*- Resetted Invite by admins*\n*- Expired invite*\n*- Group is full*',
 already_short: '*❌ You cannot shorten a url which is already shortened!*',
 need_short_url: '_Please enter a url that is shortened by bot/is.gd!_',
 not_short_url: '*❌ Please enter a url that is shortened using this bot/is.gd.*',
 song_not_found: '*❌ Unable to find a song in this name!*',
 audio_length_exceed: '*❌ Audio length must be below 60 seconds!*',
 find_failed: '*❌ Unable to find the song!*',
 find_info: '_Title_ : *{}*\n_Artists_ : *{}*\n_Released_ : *{}*\n_Album_ : *{}*\n_Genres_ : {}',
 upload_url: '_Please enter a url of an uploaded image!_',
 upload_url_inv: '*❌ Invalid url, Please enter a valid url of an uploaded image!*',
 missing_key_imgbb: '*You haven\'t provided a imgbb apikey yet.*\n_You can get a imgbb apikey from_ https://api.imgbb.com/',
 inv_key_imgbb: '*Provided key is invalid or expired!*\n_You can get another by signing up a new account._ https://api.imgbb.com/',
 unable_down: '*❌ Unable to download!*',
 unable_download: '*❌ Unable to download. Entered url may be not direct or invalid!*',
 searching: '*🔎 Searching...*',
 channel_info: '_Name_ : *{}*\n_URL_ : *{}*\n_Verified Channel_ : *{}*\n_Video Count_ : *{} ( {} )*\n_Subscribers_ : *{} ( {} )*',
 video_info: '_Title_ : *{}*\n_Description_ : *{}*\n_ID_ : *{}*\n_URL_ : *{}*\n_Duration_ : *{} ( {} Seconds )*\n_Views_ : *{}*\n_Uploaded_ : *{}*\n_Uploaded By_ : *{}*',
 yes: 'Yes',
 no: 'No',
 sender_not_admin: '*❌ You\'re not an admin!*',
 me_not_admin: '*❌ Bot is not an admin!*',
 need_rm: '_Please mention or reply to any user\'s message!_',
 need_add: '_Please enter a number or reply to any user\'s message!_',
 kicked: '*☑️ Kicked {} !*',
 added: '*✅ Added {} !*',
 promoted: '*✅ Promoted {} !*',
 demoted: '*☑️ Demoted {} !*',
 muted: '*☑️ Group muted!*',
 unmuted: '*✅ Group unmuted!*',
 gc_link: '*Group Link:*\n',
 revoked: '*☑️ Revoked group invite link!*',
 kick_myself: '*❌ I cannot kick myself!*',
 promote_myself: '*❌ I cannot promote myself!*',
 demote_myself: '*❌ I cannot demote myself!*',
 del_desc: 'Deletes the replied message for everyone.',
 leave_desc: 'Leaves from the group.',
 del_reply: '_Please reply to any message to delete!_',
 leaving_from: '*Leaving from: {}* ',
 leaving: '*Leaving...*',
 no_type_greet: '_Please enter a type of greeting!_\n_Types_ : *welcome, bye, demote, promote*\n*You can enter \'delete\' along with the type to delete current message.*',
 already_off_type: '*❌ {} is already off!*',
 deleted_type_greet: '*☑️ Deleted {} in this chat!*',
 reply_greet: '_Please reply to any message to set greet!_',
 only_text_greet: '*❌ Reply to any text only!*',
 invalid_type_greet: '*❌ Invalid type, Please enter a valid type from below:*\n*- welcome*\n*- bye*\n*- promote*\n*- demote*',
 suc_greet: '*✅ Successfully set {} message!*',
 alive_message: '*Hey {}!*\n*I\'m still alive!*\n\n_Version_ : *{}*\n_Commands_ : *{}*\n_Owner_ : *{}*',
 error_message: '*ERROR LOG*\n\n_An error occurred! You can open an issue at TOXIC-DEVIL/Leon for a fix._\n*Open an issue:* https://bit.ly/43kG9jU\n\n*Error:* ```{}```'
};
