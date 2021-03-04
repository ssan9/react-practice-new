// Display checkboxes on a sign up form
// Let's talk about checkboxes!

// As part of our sign up form, we'd like to display, at the bottom, a couple of ticks to confirm whether the user:

// 1) Accepts the terms and conditions
// 2) Accepts to receive a monthly newsletter.

// We'd like to customise the default values for these checkbox on each case.

// Resources:
// HTML input type="checkbox"

// Method “props” is meant to be run on 1 node. 0 found instead.
// it('Checkboxes only marks the terms input', () => {

//     //given
//     const wrapper = shallow(<Checkboxes terms={true} news={false} />);

//     //when
//     let termsInput = wrapper.find('input[type="checkbox"].terms');
//     let newsInput = wrapper.find('input[type="checkbox"].news');

//     // //then
//     expect(termsInput.props().value).to.equal(true);
//     expect(newsInput.props().value).to.equal(false);
// });
// Method “props” is meant to be run on 1 node. 0 found instead.
// it('Checkboxes only marks the news input', () => {

//     //given
//     const wrapper = shallow(<Checkboxes terms={false} news={true} />);

//     //when
//     let termsInput = wrapper.find('input[type="checkbox"].terms');
//     let newsInput = wrapper.find('input[type="checkbox"].news');

//     // //then
//     expect(termsInput.props().value).to.equal(false);
//     expect(newsInput.props().value).to.equal(true);
// });
// Method “props” is meant to be run on 1 node. 0 found instead.
// it('Checkboxes only marks the news input', () => {

//     //given
//     const wrapper = shallow(<Checkboxes terms={false} news={true} />);

//     //when
//     let termsInput = wrapper.find('input[type="checkbox"].terms');
//     let newsInput = wrapper.find('input[type="checkbox"].news');

//     // //then
//     expect(termsInput.props().value).to.equal(false);
//     expect(newsInput.props().value).to.equal(true);

export default  function Checkboxes(props) {
    return (
        <div>
            {props.terms ?
                <div>
                    <input 
                        type="checkbox" name="terms" value="true" id="terms" 
                        checked
                    />
                    <label htmlFor="terms">
                        Accepts the terms and conditions
                    </label>
                </div> 
                :
                <div>
                    <input
                         type="checkbox" name="news" value="false" id="news" 
                     />
                    <label htmlFor="news">
                        Accepts to receive a monthly newsletter
                    </label>
                </div>
            }
            {props.news ?
                <div>
                    <input
                         type="checkbox" name="news" value="true" id="news" 
                         checked
                     />
                    <label htmlFor="news">
                        Accepts to receive a monthly newsletter
                    </label>
                </div> 
                :
                <div>
                  <input
                       type="checkbox" name="terms" value="false" id="terms" 
                   />  
                  <label htmlFor="terms">
                      Accepts the terms and conditions
                  </label>
                </div>
            }
        </div>
    );
}