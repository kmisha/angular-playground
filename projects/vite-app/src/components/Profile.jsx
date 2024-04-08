export default function Profile({src, alt, id, isAvatar = false}) {
  return <img src={src} alt={alt} key={id} className={isAvatar ? 'rounded-full' : ''} />
}
