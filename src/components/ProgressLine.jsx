import React from "react";

const ProgressLine = () => {
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scrollPage").style.width = scrolled + "%";
  }

  return (
    <>
      <section className="z_index_3">
        <div class="header">
          <div class="windowscroll">
            <div class="windowscrollcolor" id="scrollPage"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgressLine;
