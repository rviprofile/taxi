import { createTheme } from '@mui/material'

import ArrowDownIcon from 'public/icons/arrow-down.svg'
import CheckboxIcon from 'public/icons/checkbox.svg'
import CheckboxCheckedIcon from 'public/icons/checkbox-checked.svg'

export const muiTheme = createTheme({
	components: {
		MuiTypography: {
			styleOverrides: {
				body1: {
					fontFamily: 'var(--font-ubuntu), sans-serif',
					fontSize: 15,
					fontWeight: 500,
					lineHeight: '17px',
					letterSpacing: 'normal'
				}
			}
		},
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
				disableTouchRipple: true
			}
		},
		MuiAccordion: {
			defaultProps: {
				disableGutters: true,
				square: true
			},
			styleOverrides: {
				root: {
					display: 'flex',
					flexDirection: 'column',
					background: 'transparent',
					boxShadow: 'none',
					color: '#fff',

					'&::before': {
						display: 'none'
					},

					'&.Mui-disabled': {
						background: 'inherit'
					}
				}
			}
		},
		MuiAccordionSummary: {
			styleOverrides: {
				content: {
					width: '100%',
					margin: 0
				},
				root: {
					minHeight: 'auto',
					padding: 0,

					'&.Mui-disabled': {
						opacity: 1
					}
				}
			}
		},
		MuiAccordionDetails: {
			styleOverrides: {
				root: {
					padding: 0
				}
			}
		},
		MuiPopover: {
			defaultProps: {
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'left'
				}
			},
			styleOverrides: {
				paper: {
					marginTop: 10,
					padding: '15px 10px',
					boxShadow: 'none',
					borderRadius: 5,
					backgroundColor: 'var(--color-gray-300)',
					color: '#fff',
					boxSizing: 'border-box'
				}
			}
		},
		MuiTabs: {
			defaultProps: {
				TabIndicatorProps: {
					style: {
						display: 'none'
					}
				}
			},
			styleOverrides: {
				root: {
					width: '100%',
					minHeight: 'auto',
					padding: 2
				}
			}
		},
		MuiTab: {
			styleOverrides: {
				root: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flex: '1 1 0',
					maxWidth: '100%',
					minWidth: 'auto',
					minHeight: 'auto',
					fontFamily: 'var(--font-ubuntu), sans-serif',
					fontSize: 15,
					fontWeight: 500,
					lineHeight: '17px',
					letterSpacing: 'normal',
					color: '#fff',
					padding: '5px 0',
					textTransform: 'none',
					transition: '0.3s',

					'&.Mui-selected': {
						color: '#fff'
					},

					'&:first-of-type': {
						borderTopLeftRadius: 5,
						borderBottomLeftRadius: 5
					},

					'&:last-of-type': {
						borderTopRightRadius: 5,
						borderBottomRightRadius: 5
					}
				}
			}
		},
		MuiTextField: {
			defaultProps: {
				fullWidth: true,
				variant: 'standard',
				InputLabelProps: {
					shrink: false
				}
			}
		},
		MuiInput: {
			defaultProps: {
				disableUnderline: true
			}
		},
		MuiInputBase: {
			defaultProps: {
				fullWidth: true
			},
			styleOverrides: {
				root: {
					width: '100%',
					height: 32,
					padding: '8px 0',
					borderRadius: 5,
					background: 'var(--color-gray-200)',
					boxShadow: 'var(--box-shadow)',
					fontFamily: 'var(--font-ubuntu), sans-serif',
					fontSize: 14,
					lineHeight: '16px',
					boxSizing: 'border-box',
					transition: '0.3s',

					'.MuiSelect-select.MuiInputBase-input': {
						paddingRight: 32
					}
				},
				input: {
					padding: '0 10px',
					color: '#fff',
					fontFamily: 'var(--font-ubuntu), sans-serif',
					fontSize: 14,
					lineHeight: '16px',
					letterSpacing: 'normal',

					'&::placeholder': {
						color: 'var(--color-gray-100)',
						opacity: '1',
						transition: '0.3s'
					},

					'&:hover::placeholder, &:focus::placeholder': {
						color: '#fff'
					}
				},
				inputAdornedEnd: {
					paddingRight: 10
				},
				adornedEnd: {
					paddingRight: 10
				}
			}
		},
		MuiSelect: {
			defaultProps: {
				variant: 'standard',
				MenuProps: {
					PaperProps: {
						style: {
							marginTop: 0,
							background: 'var(--color-gray-200)',
							boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.25)',
							borderRadius: '0px 0px 5px 5px'
						}
					}
				},
				IconComponent: ArrowDownIcon
			},
			styleOverrides: {
				select: {
					display: 'flex',
					alignItems: 'center',
					minHeight: '100%',
					boxSizing: 'border-box',
					borderRadius: 'inherit',
					background: 'var(--color-gray-200)',

					'&:focus': {
						borderRadius: 5
					},

					'&[aria-expanded="true"]': {
						background: 'var(--color-gray-400)',
						borderBottomLeftRadius: 0,
						borderBottomRightRadius: 0
					}
				},
				icon: {
					right: '10px',
					transition: '0.3s',

					['path']: {
						stroke: 'var(--color-gray-100)'
					}
				}
			}
		},
		MuiList: {
			defaultProps: {
				disablePadding: true
			}
		},
		MuiMenuItem: {
			defaultProps: {
				disableGutters: true
			},
			styleOverrides: {
				root: {
					padding: 0,
					fontFamily: 'var(--font-ubuntu), sans-serif',
					fontSize: 14,
					lineHeight: '17px',
					letterSpacing: 'normal',
					color: '#fff',
					background: 'transparent !important',
					transition: '0.3s',

					'&:hover': {
						color: '#fff'
					},

					'&:not(:last-child)': {
						marginBottom: 15
					},

					'&.Mui-selected': {
						color: '#fff'
					}
				}
			}
		},
		MuiButton: {
			defaultProps: {
				variant: 'text'
			},
			styleOverrides: {
				root: {
					minWidth: 'auto',
					minHeight: 31,
					padding: '7px 10px',
					background: 'var(--color-gray-200)',
					boxShadow: 'var(--box-shadow)',
					borderRadius: '5px',
					textTransform: 'unset',
					fontFamily: 'var(--font-ubuntu)',
					fontWeight: 500,
					fontSize: 15,
					lineHeight: '17px',
					color: '#fff',
					boxSizing: 'border-box',
					transition: '0.3s'
				},
				startIcon: {
					marginLeft: 0,
					marginRight: 10
				},
				endIcon: {
					marginLeft: 10,
					marginRight: 0
				}
			}
		},
		MuiCheckbox: {
			defaultProps: {
				icon: <CheckboxIcon />,
				checkedIcon: <CheckboxCheckedIcon />
			},
			styleOverrides: {
				root: {
					padding: 0,
					borderRadius: 'none'
				}
			}
		},
		MuiInputLabel: {
			defaultProps: {
				shrink: true,
				variant: 'standard'
			},
			styleOverrides: {
				root: {
					position: 'static',
					maxWidth: '100%',
					marginBottom: 10,
					fontFamily: 'var(--font-ubuntu)',
					fontSize: 15,
					fontWeight: 500,
					lineHeight: '17px',
					color: '#fff',
					transform: 'none',
					letterSpacing: 'normal',
					whiteSpace: 'normal',

					'& + div': {
						marginTop: '0 !important'
					},

					'&.Mui-focused': {
						color: '#fff'
					}
				}
			}
		},
		MuiSwitch: {
			styleOverrides: {
				root: {
					display: 'flex',
					width: 36,
					height: 20,
					padding: 0
				},
				switchBase: {
					padding: 0,
					margin: 4,

					'&.Mui-checked': {
						transform: 'translateX(16px)',

						'.MuiSwitch-thumb::before': {
							opacity: 1
						},

						'& + .MuiSwitch-track': {
							opacity: 1,
							background: 'rgba(47, 196, 183, 0.15)',

							'&::before': {
								background: 'var(--gradient-blue) border-box'
							}
						}
					}
				},
				thumb: {
					position: 'relative',
					width: 12,
					height: 12,
					color: 'transparent',
					background: '#BABCBF',
					zIndex: 2,

					'&::before': {
						position: 'absolute',
						content: `''`,
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: -2,
						opacity: 0,
						borderRadius: 'inherit',
						backgroundImage: 'var(--gradient-blue)',
						transition: '0.3s'
					}
				},
				input: {
					height: '200%',
					top: '-50%',
					left: '-150%',
					width: '400%',
					zIndex: 3
				},
				track: {
					position: 'relative',
					opacity: 1,
					borderRadius: 15,
					background: 'transparent',

					'&::before': {
						position: 'absolute',
						content: `''`,
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						borderRadius: 'inherit',
						border: '2px solid transparent',
						background: '#E7E7E8 border-box',
						mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
						WebkitMaskComposite: 'destination-out',
						maskComposite: 'exclude',
						transition: '0.3s'
					}
				}
			}
		},
		MuiModal: {
			styleOverrides: {
				root: {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}
			}
		},
		MuiSkeleton: {
			styleOverrides: {
				root: {
					backgroundColor: 'var(--color-gray-200)',
					transform: 'none',

					'&::before': {
						display: 'none'
					}
				}
			}
		},
		MuiTooltip: {
			styleOverrides: {
				popper: {
					'&[data-popper-placement*="bottom"] div.MuiTooltip-tooltip': {
						marginTop: 5
					},

					'&[data-popper-placement*="top"] div.MuiTooltip-tooltip': {
						marginBottom: 5
					}
				},
				tooltip: {
					display: 'flex',
					flexWrap: 'wrap',
					gap: 10,
					padding: '10px 15px',
					background: '#181C20',
					borderRadius: '2px',
					fontFamily: 'var(--font-ubuntu)',
					fontWeight: 400,
					fontSize: 14,
					margin: 0,
					lineHeight: '17px',
					boxSizing: 'border-box'
				}
			}
		},
		MuiSlider: {
			styleOverrides: {
				root: {
					height: 5,
					boxSizing: 'border-box'
				},
				thumb: {
					width: 14,
					height: 14,
					background: '#fff',

					'&:hover, &.Mui-active': {
						boxShadow: 'none'
					}
				},
				rail: {
					background: 'var(--color-gray-200)',
					opacity: 1
				},
				track: {
					background: 'var(--gradient-blue)'
				}
			},
			defaultProps: {}
		}
	}
})
