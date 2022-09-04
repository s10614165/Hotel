import succesimg from '../img/succesimg.svg'
import failimg from '../img/failimg.svg'
import successimg from '../img/successimg.svg'
import failllimg from '../img/failllimg.svg'
import falllwww from '../img/falllwww.svg'
import successsimg from '../img/successsimg.svg'
import failsssss from '../img/failsssss.svg'
const PostState = (props) => {
  const { setPostPopupState } = props


  const handlepopup = () => {
    setPostPopupState(p => { return !p })
  }
  if (props.poststate) {
    return (<div className="postStatepopup">
      <span>
        <div className="context">
          <div className='imgstate'>
            <img src={successsimg} alt="" className='firstimgii' />


          </div>
          <h1 className='h1 postsuccess'>預約成功</h1>
          <h5 className='h5'>請留意簡訊發送訂房通知，入住當日務必出示此訂房通知， 若未收到簡訊請來電確認，謝謝您</h5>
        </div>
        <img src={falllwww} alt="" className='closefall' onClick={() => { setPostPopupState(p => { return !p }) }} />
      </span>

    </div>)
  }
  else {
    return (<div className="postStatepopup">
      <span>
        <div className="context">
          <div className='imgstate'>
            <img src={failsssss} alt="" className='secondimgii' />


          </div>

          <h1 className='h1 postsuccess'>預約失敗</h1>
          <h5 className='h5'>哎呀！晚了一步！您預約的日期已經被預約走了， 再看看其它房型吧</h5>
        </div>
        <img src={falllwww} alt="" className='closefall' onClick={() => { setPostPopupState(p => { return !p }) }} />
      </span>



    </div>)
  }

}


export default PostState