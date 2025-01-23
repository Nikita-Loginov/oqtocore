import styled from "styled-components";
import Button from "@/components/controls/Button/Button";
import { useState } from "react";

const ContactInner = styled.div`
  margin: auto 0;
  background-color: #010101;
  max-width: 930px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
  padding: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
    transform: translateY(-800px);
  transition: all 0.5s;
`;

const ContactModalBlock = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: scroll;
  justify-content: center;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  z-index: 9999999;
  transition: all 0.5s;
  background-color: rgba(1, 1, 1, 0.8);

  &.open {
    opacity: 1;
    visibility: visible;

    ${ContactInner} {
      transform: translateY(0);
    }
  }
`;

const ContactTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ContactTopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactTopTitle = styled.h3`
  font-weight: 700;
  font-size: clamp(1.25rem, 0.8494rem + 1.5444vw, 2.5rem);
  text-transform: capitalize;
`;

const ContactTopText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const ContactTopClose = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #373737;
  cursor: pointer;
  transition: all 0.5s;

  svg {
    pointer-events: none;
  }

  &:hover {
    background-color: #272727;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContactInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const ContactInputPlaceholder = styled.span`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.5s;
  position: absolute;
  left: 24px;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`;

const ContactInputBox = styled.label`
  position: relative;
  border-radius: 18px;
  background-color: rgb(33, 33, 33);
  padding: 24px;
  cursor: pointer;
  min-height: 67px;
  border: 1px solid transparent;
  transition: all 0.5s;

  &.active {
    border-color: #fff;

    ${ContactInputPlaceholder} {
      font-size: 10px;
      top: 40%;
    }
  }
`;

const ContactInput = styled.input`
  width: 100%;
  background-color: transparent;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  position: relative;
  top: 12px;
`;

const ContactQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContactQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactQuestionTitle = styled.h4`
  font-size: clamp(1rem, 0.9199rem + 0.3089vw, 1.25rem);
  font-weight: 600;
  line-height: 1.45;
`;

const ContactQuestionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ContactQuestionItem = styled.label`
  cursor: pointer;
`;

const ContactQuestionInput = styled.input`
  position: absolute;
  left: -999999px;
  opacity: 0;

  &:checked + span {
    background-color: rgb(43, 36, 255);
  }
`;

const ContactQuestionChexk = styled.span`
  border: 2px solid rgb(43, 36, 255);
  border-radius: 12px;
  min-height: 43px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  transition: all 0.5s;
  color: #fff;
`;

export default function ContactPopup({isOpen}) {
  const [formData, setFormData] = useState({
    inputName: "",
    inputEmail: "",
    inputTel: "",
    inputCommunication: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleFocus(e) {
    const relativeInput = e.target.closest("label");
    relativeInput.classList.add("active");
  }

  function handleBlur(e) {
    const relativeInput = e.target.closest("label");

    if (!e.target.value) {
      relativeInput.classList.remove("active");
    }
  }

  return (
    <ContactModalBlock className={`contact-modal ${isOpen && 'open'}`}>
      <ContactInner>
        <ContactTop>
          <ContactTopContent>
            <ContactTopTitle>Your Next Big Step Starts Here</ContactTopTitle>

            <ContactTopText>Let's learn more about each of us</ContactTopText>
          </ContactTopContent>

          <ContactTopClose type="button" className="close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ContactTopClose>
        </ContactTop>

        <ContactForm>
          <ContactInputs>
            <ContactInputBox>
              <ContactInputPlaceholder>Your name</ContactInputPlaceholder>

              <ContactInput
                type="text"
                name="inputName"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={formData.inputName}
                onChange={handleChange}
              />
            </ContactInputBox>

            <ContactInputBox>
              <ContactInputPlaceholder>Your Email</ContactInputPlaceholder>

              <ContactInput
                type="email"
                name="inputEmail"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={formData.inputEmail}
                onChange={handleChange}
              />
            </ContactInputBox>

            <ContactInputBox>
              <ContactInputPlaceholder>
                Your Phone Number
              </ContactInputPlaceholder>

              <ContactInput
                type="tel"
                name="inputTel"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={formData.inputTel}
                onChange={handleChange}
              />
            </ContactInputBox>

            <ContactInputBox>
              <ContactInputPlaceholder>
                Your preferred communication channel
              </ContactInputPlaceholder>

              <ContactInput
                type="text"
                name="inputCommunication"
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={formData.inputCommunication}
                onChange={handleChange}
              />
            </ContactInputBox>
          </ContactInputs>

          <ContactQuestions>
            <ContactQuestion>
              <ContactQuestionTitle>
                Which of the following better describes your development
                requirements?
              </ContactQuestionTitle>

              <ContactQuestionList>
                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>
                    Front-end Development
                  </ContactQuestionChexk>
                </ContactQuestionItem>

                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>
                    Back-end development
                  </ContactQuestionChexk>
                </ContactQuestionItem>

                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>
                    Full-stack development with ongoing support
                  </ContactQuestionChexk>
                </ContactQuestionItem>

                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>DevOps</ContactQuestionChexk>
                </ContactQuestionItem>

                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>Smart contracts</ContactQuestionChexk>
                </ContactQuestionItem>

                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>Cloud Computing</ContactQuestionChexk>
                </ContactQuestionItem>

                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>Other</ContactQuestionChexk>
                </ContactQuestionItem>
              </ContactQuestionList>
            </ContactQuestion>

            <ContactQuestion>
              <ContactQuestionTitle>
                Which blockchain platforms are you considering?
              </ContactQuestionTitle>

              <ContactQuestionList>
                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>
                    Layer1 blockchain (Ethereum, Solana, TON etc.)
                  </ContactQuestionChexk>
                </ContactQuestionItem>

                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>
                    Layer 2S & Side blockchains (ZkSync, Polygon, Arbitrum etc.)
                  </ContactQuestionChexk>
                </ContactQuestionItem>

                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>
                    Multiple platforms
                  </ContactQuestionChexk>
                </ContactQuestionItem>

                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>Not sure</ContactQuestionChexk>
                </ContactQuestionItem>

                <ContactQuestionItem>
                  <ContactQuestionInput type="checkbox" />

                  <ContactQuestionChexk>Other</ContactQuestionChexk>
                </ContactQuestionItem>
              </ContactQuestionList>
            </ContactQuestion>
          </ContactQuestions>
        </ContactForm>

        <Button
          iconName="arrow-right"
          linkText="Send"
          positionIconFirstHover="40px, 0"
          positionIconSecond="-24px, 0"
          onClick={() => console.log()}
        />
      </ContactInner>
    </ContactModalBlock>
  );
}
