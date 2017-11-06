// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './MenuPanelScrollableWithActionArea.scss';
import Button from '../Button/Button';
const displayName = 'MenuPanelScrollableWithActionArea';

type Props = {
    children: React$Element<*>,
    className?: string,
    primaryButtonProps: Object,
    secondaryButtonProps?: Object,
    maxHeight: string,
};

const MenuPanelScrollableWithActionArea = ({
                        children,
                        className,
                        maxHeight = '50vh',
                        primaryButtonProps,
                        secondaryButtonProps,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.MenuPanelScrollableWithActionArea,
        className
    );

    return (
            <div
                {...filteredProps}
                className={componentClass}
            >
                <div
                className={styles.ContentWrapper}
                style={{ maxHeight }}
                >
                    {children}
                </div>
                <div className={styles.ActionArea}>
                    {secondaryButtonProps ? (
                    <Button
                            {...secondaryButtonProps}
                            autoWidth="sm"
                            format="secondary"
                            isInline
                            size="md"
                        />
                    ) : null}
                    <Button
                        {...primaryButtonProps}
                        autoWidth="sm"
                        format="primary"
                        isInline
                        size="md"
                    />
                </div>
            </div>
    );
};

MenuPanelScrollableWithActionArea.displayName = displayName;

export default MenuPanelScrollableWithActionArea;
