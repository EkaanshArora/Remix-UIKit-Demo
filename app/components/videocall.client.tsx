import AgoraUIKit, { layout } from 'agora-react-uikit';
import { loaderData } from '~/routes/channel/$channel';

export default function Videocall(props: loaderData) {
    const { appId, channel, rtcToken, rtmToken, username } = props

    return (
        <div style={{display: 'flex', flex: 1, height: '80vh'}}>
            <AgoraUIKit
                rtcProps={{ appId, channel, token: rtcToken, layout: layout.grid}}
                rtmProps={{ token: rtmToken, uid: String(username), displayUsername: true, username: 'User' + String(username).slice(-3) }}
            />
        </div>
    )
}