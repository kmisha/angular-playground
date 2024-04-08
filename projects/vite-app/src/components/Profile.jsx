export default function Profile({src, alt, isAvatar = false}) {
  return <img src={src} alt={alt} className={isAvatar ? 'rounded-full' : ''} />
}
