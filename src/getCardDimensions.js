export default function ({
  backdropWidth,
  backdropHeight,
  backdropX,
  backdropY,
  draggerX
}) {

  const backdropPosX = (window.innerWidth / 2) - (backdropWidth / 2) - backdropX - draggerX
  const backdropPosY = (window.innerHeight) - backdropHeight - backdropY
  const backdropScaleX = window.innerWidth / backdropWidth
  const backdropScaleY = window.innerHeight / backdropHeight

  return {
    backdropPosX,
    backdropPosY,
    backdropScaleX,
    backdropScaleY,
  }
}
