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
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Frame advance'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Frame Reverse'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Insert Frame'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Delete Frame'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Insert Component'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Delete Component'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Browse Image'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'primary'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Undo All'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'secondary'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Special Instructions'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'secondary'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Details Info'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'success'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Save'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'danger'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Delete'}
        ></ButtonUI>
      </div>
      <div className={styles['dt-button-cont']}>
        <ButtonUI
          varientprop={'success'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Send'}
        ></ButtonUI>
        <ButtonUI
          varientprop={'danger'}
          classnameprop={styles['button-submit']}
          styleprop={{ padding: '0px' }}
          click={clickSubmit}
          disableButtonprop={false}
          buttonnameprop={'Exit'}
        ></ButtonUI>
      </div>
    </Fragment>
  );
};

export default React.memo(DTOperations);
