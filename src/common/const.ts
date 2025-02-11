const colors = [
  '#748084', // L1
  '#238d6f', // L2
  '#3a749f', // L3
  '#6c57a0', // L4
  '#8a5e3e', // L5
  '#97434c', // L6
];

const agentsNameMap = [
  { key: 'assault', label: '突击' },
  { key: 'project', label: '工程' },
  { key: 'support', label: '支援' },
  { key: 'scout', label: '侦察' },
];

const seasonOptions = [
  { label: '焰火', value: '3' },
  { label: '聚变', value: '2' },
  { label: '起源', value: '1' },
];

const ckOptions = [
  {
    label: '浩然白帝郑居中',
    value:
      'uin=o3477826311; RK=b59FxoIHym; ptcz=3777785d342a528eddf82ba651955ccb98caacf6f435c3c384528525cd0c6484; pgv_pvid=7196508015; eas_sid=21A7g2d2Y5t0Q447b1g8X9L8K3; lplqqcomrouteLine=a20240115lpl_a20240115lpl_a20240115lpl; rv2=80502F3A38E6C3F70F730D59DE0147F331CC33FFFFC02123C4; property20=946F9D3A1B6588D45437A57AC4230CFBE51F1C96D894E540A3D998831349302B87A833D7E96FCEEB; dfqqcomrouteLine=a20240729directory_index_a20240729directory_index_a20240729directory_index_pc; ied_qq=o3477826311; pgv_info=ssid; skey=@JBz9L47JS; iegams_milo_proxylogin_qc=101491592_%24%24_6299DAAC80EA915F34FDA0BE5A6B2635_%24%24_514422781D6FF22FFD04013B58741788; refresh_token=; expires_time=; acctype=qc; openid=6299DAAC80EA915F34FDA0BE5A6B2635; access_token=514422781D6FF22FFD04013B58741788; appid=101491592; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=',
  },
  {
    label: 'Tobyouter',
    value:
      'RK=9w8FxIIX2G; ptcz=050c7946542badbda08f59980d64b1d75401c43b5fba9a7c33585f31976b74f0; iip=0; _qimei_uuid42=1850f171c29100a6a3958363cfd2d0d375b2ae1c6c; _qimei_h38=d896c076a3958363cfd2d0d30300000821850f; eas_sid=m1I7C2h2X3V4A0P772u57021t2; qq_domain_video_guid_verify=28a610049503a5c3; pgv_pvid=2160375143; _qimei_q36=; pac_uid=0_Rn5QhEYkmEnWJ; _qimei_fingerprint=2257a00fd2b9311f5ea7450c12d4d991; suid=user_0_Rn5QhEYkmEnWJ; pgv_info=ssid=s6243878912; iegams_milo_proxylogin_qc=101491592_%24%24_BE41C0491EE5F17E6DA94A72C79ADB8E_%24%24_6A9C431C4DD5F489493AFFE1EAB466DC; dfqqcomrouteLine=record202410ver_record202410ver; acctype=qc; openid=BE41C0491EE5F17E6DA94A72C79ADB8E; access_token=6A9C431C4DD5F489493AFFE1EAB466DC; appid=101491592; refresh_token=; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=; expires_time=',
  },
  {
    label: '铁板红烧鱿鱼',
    value:
      'pgv_pvid=4895559500; eas_sid=81i7L3v9k1T8O7K3Q4y8F213u6; pgv_info=ssid=s3810672168; dfqqcomrouteLine=record202410ver_record202410ver_record202410ver; RK=tSUQeBPr2E; ptcz=56761e84298743277c44fdc9ce6e1aaf01d848ddfba89205e806370b9d360f1e; iegams_milo_proxylogin_qc=101491592_%24%24_26440B7F3D3C0BA472803E8CC9CCF2AA_%24%24_21F4AD729C637E974124A70DFFEF70EB; acctype=qc; openid=26440B7F3D3C0BA472803E8CC9CCF2AA; access_token=21F4AD729C637E974124A70DFFEF70EB; appid=101491592; refresh_token=; ieg_ams_token=; ieg_ams_session_token=; ieg_ams_token_time=; ieg_ams_sign=; expires_time=',
  },
  { label: '自定义', value: 'custom' },
];

export { colors, agentsNameMap, seasonOptions, ckOptions };
