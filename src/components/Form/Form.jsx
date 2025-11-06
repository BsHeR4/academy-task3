import { IoLogoFacebook } from 'react-icons/io5'
import BaseCard from '../BaseCard/BaseCard'
import styles from './Form.module.css'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import IconButton from '../IconButton/IconButton'

const Form = ({ inputs, submitTitle }) => {

    const renderInput = (input, index) => {
        switch (input.type) {
            case 'select':
                return (
                    <select
                        name={input.name}
                        id={index}
                        key={index}
                        className={styles.input}
                        defaultValue=""
                    >
                        <option value="" disabled>{input.placeholder || 'Select an option'}</option>
                        {
                            input.options?.map((option, i) => (
                                <option value={option.value} key={i}>{option.label}</option>
                            ))
                        }
                    </select>
                )

            case 'textarea':
                return (
                    <textarea
                        name={input.name}
                        id={index}
                        key={index}
                        placeholder={input.placeholder}
                        className={styles.textarea}
                    ></textarea>
                )

            default:
                return (
                    <input
                        type={input.type}
                        name={input.name}
                        id={index}
                        key={index}
                        placeholder={input.placeholder}
                        className={styles.input}
                    />
                )
        }
    }

    return (
        <BaseCard className={styles.formCard}>
            <div className={styles.social}>
                <IconButton className={styles.socialIcon} icon={<IoLogoFacebook />} />
                <IconButton className={styles.socialIcon} icon={<FaTwitter />} />
                <IconButton className={styles.socialIcon} icon={<FaLinkedin />} />
            </div>
            <form className={styles.form}>

                <div className={styles.inputs}>
                    {
                        inputs.map((input, index) => {
                            const wrapperClass = input.type === 'textarea' ? styles.full : '';

                            return <div className={wrapperClass}>
                                <label htmlFor={index}>{input.label}</label>
                                {renderInput(input, index)}
                            </div>

                        })
                    }
                </div>
                <input key={"submit_101"} type="submit" value={submitTitle} />
            </form>
        </BaseCard>
    )
}

export default Form
