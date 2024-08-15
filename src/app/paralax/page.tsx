'use client'
// @ts-ignore
import Fullpage, { FullPageSections, FullpageNavigation, FullpageSection, } from '@ap.cx/react-fullpage';

export default function Paralax() {
    return (
        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection style={{
                    backgroundColor: 'lime',
                    height: '80vh',
                }}>
                    1
                </FullpageSection>

                <FullpageSection style={{
                    backgroundColor: 'coral',

                }}>
                    2
                </FullpageSection>

                <FullpageSection style={{
                    backgroundColor: 'firebrick',

                }}>
                    3
                </FullpageSection>
            </FullPageSections>
        </Fullpage>

    );
}
