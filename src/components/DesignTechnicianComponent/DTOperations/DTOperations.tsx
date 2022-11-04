import React, { Fragment, FunctionComponent } from 'react';
import { Button as ButtonUI } from '../../../commonui';
import styles from '../../../commonui/Button/Button.module.scss';

interface IDTOperationsProps {
  classname?: string;
}

const DTOperations: FunctionComponent<IDTOperationsProps> = () => {
  const clickSubmit = () => {
    console.log('Clicked');
  };
  return (
    <Fragment>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ margin: '4px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Login'}
        ></ButtonUI>
      </div>
    </Fragment>
  );
};

export default React.memo(DTOperations);
