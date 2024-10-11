"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98001],{26039:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>l,data:()=>d});var a=o(1768);const i={},l=(0,o(69420).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"shinasystem-gcm-300z",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#shinasystem-gcm-300z"},[(0,a.Lk)("span",null,"ShinaSystem GCM-300Z")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"GCM-300Z")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=ShinaSystem"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("ShinaSystem")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"SiHAS gas valve")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"gas_valve_state, battery, close_timeout, close_remain_timeout, volume, overheat_mode, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/GCM-300Z.png",alt:"ShinaSystem GCM-300Z"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="gas-valve-state-binary" tabindex="-1"><a class="header-anchor" href="#gas-valve-state-binary"><span>Gas valve state (binary)</span></a></h3><p>Valve state if open or closed. Value can be found in the published state on the <code>gas_valve_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;gas_valve_state&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;gas_valve_state&quot;: NEW_VALUE}</code>. If value equals <code>OPEN</code> gas valve state is ON, if <code>CLOSE</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="close-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#close-timeout-numeric"><span>Close timeout (numeric)</span></a></h3><p>Set the default closing time when the gas valve is open.. Value can be found in the published state on the <code>close_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;close_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;close_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>540</code>. The unit of this value is <code>min</code>.</p><h3 id="close-remain-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#close-remain-timeout-numeric"><span>Close remain timeout (numeric)</span></a></h3><p>Set the time or remaining time until the gas valve closes.. Value can be found in the published state on the <code>close_remain_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;close_remain_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;close_remain_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>540</code>. The unit of this value is <code>min</code>.</p><h3 id="volume-enum" tabindex="-1"><a class="header-anchor" href="#volume-enum"><span>Volume (enum)</span></a></h3><p>Values observed are <code>1</code> (voice), <code>2</code> (high) or <code>3</code> (low).. Value can be found in the published state on the <code>volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The possible values are: <code>voice</code>, <code>high</code>, <code>low</code>.</p><h3 id="overheat-mode-enum" tabindex="-1"><a class="header-anchor" href="#overheat-mode-enum"><span>Overheat mode (enum)</span></a></h3><p>Temperature overheating condition.. Value can be found in the published state on the <code>overheat_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;overheat_mode&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>normal</code>, <code>overheat</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15))])}]]),d=JSON.parse('{"path":"/devices/GCM-300Z.html","title":"ShinaSystem GCM-300Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ShinaSystem GCM-300Z control via MQTT","description":"Integrate your ShinaSystem GCM-300Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-12-26T18:38:16.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Gas valve state (binary)","slug":"gas-valve-state-binary","link":"#gas-valve-state-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Close timeout (numeric)","slug":"close-timeout-numeric","link":"#close-timeout-numeric","children":[]},{"level":3,"title":"Close remain timeout (numeric)","slug":"close-remain-timeout-numeric","link":"#close-remain-timeout-numeric","children":[]},{"level":3,"title":"Volume (enum)","slug":"volume-enum","link":"#volume-enum","children":[]},{"level":3,"title":"Overheat mode (enum)","slug":"overheat-mode-enum","link":"#overheat-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728656050000},"filePathRelative":"devices/GCM-300Z.md"}')}}]);