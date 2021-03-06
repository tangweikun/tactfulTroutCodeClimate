import { gql } from 'react-apollo'

export const sendTextMessage = gql`
  mutation SendTextChatMessage($chatRoomId: ID!, $text: String!) {
    sendTextChatMessage(chatRoomId: $chatRoomId, text: $text) {
      text
    }
  }
`

export const sendAudioMessage = gql`
  mutation SendAudioChatMessage(
    $chatRoomId: ID!
    $base64EncodedAudioData: String!
  ) {
    sendAudioChatMessage(
      chatRoomId: $chatRoomId
      base64EncodedAudioData: $base64EncodedAudioData
    ) {
      audioUrl
    }
  }
`

export const sendImageMessage = gql`
  mutation SendImageChatMessage(
    $chatRoomId: ID!
    $base64EncodedImageData: String!
  ) {
    sendImageChatMessage(
      chatRoomId: $chatRoomId
      base64EncodedImageData: $base64EncodedImageData
    ) {
      imageUrl
    }
  }
`
