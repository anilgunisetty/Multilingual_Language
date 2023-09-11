import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <>
      <li className="item-container">
        <img src={imageUrl} className="item-image" alt={`${imageAltText}`} />
      </li>
    </>
  )
}

export default LanguageItem
