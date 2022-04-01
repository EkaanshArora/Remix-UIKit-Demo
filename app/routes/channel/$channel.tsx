import { RtcRole, RtcTokenBuilder, RtmRole, RtmTokenBuilder } from "agora-access-token";
import { useEffect, useState } from "react";
import { json, LoaderFunction, useLoaderData } from "remix";
import Videocall from '~/components/videocall.client'

export type loaderData = {
  rtcToken: string;
  rtmToken: string;
  appId: string;
  channel: string;
  username: number;
}

export const loader: LoaderFunction = async ({params}) => {
  const { APP_ID, CERTIFICATE } = process.env as unknown as { APP_ID: string, CERTIFICATE: string }
  console.log(APP_ID, CERTIFICATE)
  const channel = params.channel as string
  const username = Date.now()
  const time = Math.floor(username / 1000) + 600
  const rtcToken = RtcTokenBuilder.buildTokenWithUid(APP_ID, CERTIFICATE, channel, 0, RtcRole.PUBLISHER, time)
  const rtmToken = RtmTokenBuilder.buildToken(APP_ID, CERTIFICATE, String(username), RtmRole.Rtm_User, time)
  const data: loaderData = { rtcToken, appId: APP_ID, channel, rtmToken, username }
  return json(data);
};

export default function Index() {
  const [mounted, setMounted] = useState(false);
  const jsonData: loaderData = useLoaderData()
  const { rtcToken, rtmToken, appId, channel, username } = jsonData

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Videocall</h1>
      <div style={{ display: 'flex', flex: 1 }}>
        {mounted && <Videocall appId={appId} channel={channel} rtcToken={rtcToken} rtmToken={rtmToken} username={username} />}
      </div>
    </div>
  );
}
