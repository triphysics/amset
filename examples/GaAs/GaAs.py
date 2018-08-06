from amset.core import Amset
import logging
import os

if __name__ == "__main__":
    # user inputs:
    use_single_parabolic_band = False

    logging.basicConfig(level=logging.INFO)

    # setting up the inputs:
    model_params = {"bs_is_isotropic": True, "elastic_scatterings": ["ACD", "IMP", "PIE"],
                    "inelastic_scatterings": ["POP"]}
    if use_single_parabolic_band:
        effective_mass = 0.25
        model_params["poly_bands"]= [[[[0.0, 0.0, 0.0], [0.0, effective_mass]]]]

    GaAs_params = {"epsilon_s": 12.9, "epsilon_inf": 10.9, "W_POP": 8.73, "C_el": 139.7,
                   "E_D": {"n": 8.6, "p": 8.6}, "P_PIE": 0.052, "scissor": 0.5818}
    GaAs_path = "../../test_files/GaAs"

    # the fort.123* file contains the coefficients of the interpolated band structure;
    # it is generated by a modified version of BoltzTraP
    coeff_file = os.path.join(GaAs_path, "fort.123_GaAs_k23")


    amset = Amset(calc_dir='.',
                  vasprun_file=os.path.join(GaAs_path, "vasprun.xml"),
                  material_params=GaAs_params,
                  model_params = model_params,
                  dopings= [-2e15],
                  temperatures=[300, 600])

    # running Amset
    amset.run(coeff_file=coeff_file, kgrid_tp="very coarse")

    # generating files and outputs
    amset.write_input_files()
    amset.to_csv()
    amset.plot(k_plots=['energy'], E_plots='all', show_interactive=True,
               carrier_types=amset.all_types, save_format=None)
    amset.to_file()
    amset.to_json(kgrid=True, trimmed=True, max_ndata=50, nstart=0)
