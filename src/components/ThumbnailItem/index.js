import './index.css'

const ThumbnailItem = props => {
  const {imagesList, updateImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList
  const thumbnailClassName = isActive
    ? 'thumbnail-image active'
    : 'thumbnail-image'

  const imageUpdate = () => {
    updateImageId(id)
  }

  return (
    <li className="thumbnail-item">
      <button className="thumbnail-button" type="button" onClick={imageUpdate}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
