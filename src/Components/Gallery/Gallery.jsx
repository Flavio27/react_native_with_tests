import { useCallback, useState } from 'react'
import {
  FlatList, Modal, StatusBar, Text, TouchableHighlight,
} from 'react-native'
import { useRecoilState } from 'recoil'
import { selectedPostState } from '../../Storage/atoms'
import * as S from './Gallery.style'

export default () => {
  const [selectedPost] = useRecoilState(selectedPostState)
  const [showModal, setShowModal] = useState(false)
  const [imgSelected, setImgSelected] = useState('')

  const handleOpenModal = (img) => {
    setShowModal((e) => !e)
    setImgSelected(img)
  }

  const RenderCard = ({ item }) => {
    if (!item) return false

    return (
      <TouchableHighlight
        onPress={() => { handleOpenModal(item) }}
        testID={item}
      >
        <S.Photo
          source={{ uri: item }}
        />
      </TouchableHighlight>
    )
  }

  const keyExtractor = useCallback((img) => img.toString(), [])

  return (
    <S.Container>
      <StatusBar backgroundColor='#000' color='#fff'/>
      <Modal
        animationType='slide'
        transparent
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal)
        }}
        dismiss={() => setShowModal(!showModal)}
      >{ showModal ? (
        <TouchableHighlight
          onPress={() => { setShowModal(!showModal) }}
          accessibilityLabel='expandedPhotoContainer'
        >
          <S.ExpandedPhoto
            source={{ uri: imgSelected }}
            accessibilityLabel='expandedPhoto'
          />
        </TouchableHighlight>
      )
        : <Text>Loading...</Text>}
      </Modal>
      <FlatList
        data={selectedPost?.gallery || []}
        renderItem={RenderCard}
        keyExtractor={keyExtractor}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      />
    </S.Container>
  )
}
