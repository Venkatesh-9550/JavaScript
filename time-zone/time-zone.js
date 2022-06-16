

function disp_TZ() {
    tz = f1.tz.options[f1.tz.options.selectedIndex].value;
    str = new Date().toLocaleString("en-NZ", { timeZone: tz, timeZoneName: "short" })
    document.getElementById('ct').innerHTML = str + "," + tz;
    display_c()
}
function display_c() {
    var refresh = 1000;
    mytime = setTimeout('disp_TZ()', refresh)
}
var my_timezones =
    [
        'Indian/Antananarivo',
        'Indian/Chagos',
        'Indian/Christmas',
        'Indian/Cocos',
        'Indian/Comoro',
        'Indian/Kerguelen',
        'Indian/Mahe',
        'Indian/Maldives',
        'Indian/Mauritius',
        'Indian/Mayotte',
        'Indian/Reunion',
        'Africa/Abidjan',
        'Africa/Accra',
        'Africa/Addis_Ababa',
        'Pacific/Tahiti',
        'Pacific/Tarawa',
        'Pacific/Tongatapu',
        'Pacific/Wake',
        'Pacific/Wallis'
    ]
for (i = 0; i < my_timezones.length; i++) {
    addOption(document.f1.tz, my_timezones[i], my_timezones[i]);
}

function addOption(selectbox, text, value) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);
}