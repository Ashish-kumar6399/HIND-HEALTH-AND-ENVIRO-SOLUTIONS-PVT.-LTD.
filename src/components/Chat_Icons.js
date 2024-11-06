import React from 'react';
import Link from 'next/link';

const Chat_Icons = () => {
  return (
    <>
  <div className="position-fixed bottom-0 end-0 mb-4 me-4">
          <Link href="https://api.whatsapp.com/send?phone=+91 9871076261 &text=" className="btn rounded-circle" target="_blank" rel="noopener noreferrer" style={{ width: '60px', height: '60px', fontSize: '30px', textAlign: 'center',background:"#25d366", color:"#FFF" }}>
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
        </div>

      </>
  )
}

export default Chat_Icons
