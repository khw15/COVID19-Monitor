import React, { FC } from 'react'
import { useTranslation } from "react-i18next"

const Footer: FC = () => {
    const { t } = useTranslation()

    return (
        <div className="mt-2 text-xs text-center Footer text-muted">
            <div className="flex flex-col items-center justify-center mt-2 md:flex-row">
                <div>{t('provided-by')} <a className="underline hover:no-underline" href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer">COVID-19 API</a></div>
                <div className="hidden px-1 md:inline-block">|</div>
                <div>
                    {t('powered-by')} <a className="underline hover:no-underline" href="mailto:i315@i315.my.id" target="_blank" rel="noopener noreferrer">i315</a>
                    <div className="inline-block px-1 md:hidden">|</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
