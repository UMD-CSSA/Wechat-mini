<?php
$appid="wx00698d8440edf626";
$appsecret="公众号的secret";
$url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";
$ch=curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,FALSE);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,FALSE);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
$output=curl_exec($ch);
curl_close($ch);
$jsoninfo=json_decode($output,true);
$access_token=$jsoninfo["access_token"];
$expires_in=$jsoninfo["expires_in"];
echo $output;
// echo $access_token;
// echo $expires_in;
?>