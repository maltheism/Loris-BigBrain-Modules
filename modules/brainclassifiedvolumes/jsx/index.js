import React from 'react';
import FilterableDataTable from 'jsx/FilterableDataTable';


/**
 * BrainClassifiedVolumes component
 * @return {JSX.Element}
 */
const BrainClassifiedVolumes = () => {
  // data for filter table.
  const data = [
    // 2015 -------------------/
    // MNI ICBM 152 Space (ICBM 2009b Nonlinear Symmetric)
    ['Full Classified Volume, 100um', '100um isotropic (1970x2330x1890)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/full_cls_100um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/nii/full_cls_100um_2009b_sym.nii.gz'],
    ['Full Classified Volume, 200um', '200um isotropic (985x1165x945)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/full_cls_200um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/nii/full_cls_200um_2009b_sym.nii.gz'],
    ['Full Classified Volume, 300um', '300um isotropic (657x777x630)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/full_cls_300um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/nii/full_cls_300um_2009b_sym.nii.gz'],
    ['Full Classified Volume, 400um', '400um isotropic (493x583x473)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/full_cls_400um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/nii/full_cls_400um_2009b_sym.nii.gz'],
    ['Full Classified Volume, 1000um', '1000um isotropic (TODO)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/full_cls_1000um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/nii/full_cls_1000um_2009b_sym.nii.gz'],
    // Histological Space
    ['Full Classified Volume, 100um', '100um isotropic (1970x2330x1890)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/full_cls_100um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/nii/full_cls_100um.nii.gz'],
    ['Full Classified Volume, 200um', '200um isotropic (985x1165x945)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/full_cls_200um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/nii/full_cls_200um.nii.gz'],
    ['Full Classified Volume, 300um', '300um isotropic (657x777x630)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/full_cls_300um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/nii/full_cls_300um.nii.gz'],
    ['Full Classified Volume, 400um', '400um isotropic (493x583x473)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/full_cls_400um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/nii/full_cls_400um.nii.gz'],
    ['Full Classified Volume, 400um', '1000um isotropic (493x583x473)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/full_cls_1000um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/nii/full_cls_1000um.nii.gz'],
    // 2013 ---------------------/
    // MNI ICBM 152 Space (ICBM 2009b Nonlinear Symmetric)
    ['Full Classified Volume, 100um', '100um isotropic (1970x2330x1890)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_surface.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_100um_2009b_sym.mnc', 'File too large'],
    ['Full Classified Volume, 200um', '200um isotropic (985x1165x945)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_200um_2009b_sym.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_200um_2009b_sym.nii.gz'],
    ['Full Classified Volume, 300um', '300um isotropic (657x777x630)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_300um_2009b_sym.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_300um_2009b_sym.nii.gz'],
    ['Full Classified Volume, 400um', '400um isotropic (493x583x473)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_400um_2009b_sym.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_400um_2009b_sym.nii.gz'],
    // 7T syn24 template in MNI Space (No Data)
    // Histological Space
    ['Full Classified Volume, 100um', '100um isotropic (1970x2330x1890)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_surface.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_100um.mnc', 'File too large'],
    ['Full Classified Volume, 200um', '200um isotropic (985x1165x945)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_200um.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_200um.nii.gz'],
    ['Full Classified Volume, 300um', '300um isotropic (657x777x630)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_300um.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_300um.nii.gz'],
    ['Full Classified Volume, 400um', '400um isotropic (493x583x473)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_400um.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_400um.nii.gz'],
  ];
  // fields configured for filter.
  const fields = [
    {
      label: 'Description',
      show: true,
      filter: {
        name: 'Description',
        type: 'select',
        options: {
          'Full Classified Volume, 100um': 'Full Classified Volume, 100um',
          'Full Classified Volume, 200um': 'Full Classified Volume, 200um',
        },
      },
    },
    {
      label: 'Resolution',
      show: true,
      filter: {
        name: 'Resolution',
        type: 'text',
      },
    },
    {
      label: 'Encoding',
      show: true,
      filter: {
        name: 'Encoding',
        type: 'select',
        options: {
          '8-bit unsigned byte': '8-bit unsigned byte',
        },
      },
    },
    {
      label: 'Year',
      show: false,
      filter: {
        name: 'Year',
        type: 'select',
        options: {
          '2015': '2015',
          '2013': '2013',
        },
      },
    },
    {
      label: 'Comments',
      show: false,
      filter: {
        name: 'Comments',
        type: 'text',
      },
    },
    {
      label: 'View',
      show: false,
      filter: {
        name: 'View',
        type: 'text',
      },
    },
    {
      label: 'Minc',
      show: true,
      filter: {
        name: 'Minc',
        type: 'text',
      },
    },
    {
      label: 'NIFTI',
      show: true,
      filter: {
        name: 'NIFTI',
        type: 'text',
      },
    },
  ];

  /**
   * Modify behaviour of specified column cells in the Data Table component
   *
   * @param {string} column - column name
   * @param {string} cell - cell content
   * @param {array} rowData - array of cell contents for a specific row
   * @param {array} rowHeaders - array of table headers (column names)
   *
   * @return {*} a formatted table cell for a given column
   */
  const formatColumn = (column, cell, rowData, rowHeaders) => {
    let reactElement;
    switch (column) {
      case 'PSCID':
        const url = `${this.props.baseURL}/${rowData.DCCID}/`;
        reactElement = <td><a href={url}>{rowData.PSCID}</a></td>;
        break;
      default:
        reactElement = <td>{cell}</td>;
        break;
    }
    return reactElement;
  };

  return (
    <>
      <h1>3D Classified Volumes Data Release</h1>
      <FilterableDataTable
        name={'filterableBrainClassifiedVolumes'}
        data={data}
        fields={fields}
        getFormattedCell={formatColumn}
      />
    </>
  );
};
BrainClassifiedVolumes.defaultProps = {
  url: {
    base: '',
  },
};

/**
 * Render component on page load.
 */
window.addEventListener('load', () => {
  ReactDOM.render(
    <BrainClassifiedVolumes
      url={{
        base: loris.BaseURL,
      }}
    />,
    document.getElementById('lorisworkspace')
  );
});
