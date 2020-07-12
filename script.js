function getText()
{
    let text = document.getElementById('textOfBonus').value;
    let newText = 'ВК:\nvk.com/app1744756?ad_id=' + text + '\nФБ:\napps.facebook.com/playwormix/?ad_id=' + text +
    '\nММ:\nmy.mail.ru/apps/731265?ad_id=' + text + '\nОК:\nok.ru/game/wormix?ad_id=' + text;
    document.getElementById('textOfBonus').value = newText;
    document.getElementById('textOfBonus').select();
    document.execCommand('copy');
}