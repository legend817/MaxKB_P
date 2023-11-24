import { h } from 'vue'
export const iconMap: any = {
  'app-404': {
    iconReader: () => {
      return h('i', [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            style: 'height:14px;width:14px',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M260.266667 789.333333c-21.333333 0-38.4-17.066667-38.4-38.4v-59.733333H38.4c-12.8 0-29.866667-8.533333-34.133333-21.333333-4.266667-17.066667-4.266667-29.866667 4.266666-42.666667l221.866667-294.4c8.533333-12.8 25.6-17.066667 42.666667-12.8 17.066667 4.266667 25.6 21.333333 25.6 38.4v256h34.133333c21.333333 0 38.4 17.066667 38.4 38.4s-17.066667 38.4-38.4 38.4H298.666667v59.733333c0 21.333333-17.066667 38.4-38.4 38.4z m-145.066667-179.2h106.666667V469.333333l-106.666667 140.8zM913.066667 742.4c-21.333333 0-38.4-17.066667-38.4-38.4v-59.733333h-183.466667c-12.8 0-29.866667-8.533333-34.133333-21.333334-8.533333-12.8-4.266667-29.866667 4.266666-38.4l221.866667-294.4c8.533333-12.8 25.6-17.066667 42.666667-12.8 17.066667 4.266667 25.6 21.333333 25.6 38.4v256h34.133333c21.333333 0 38.4 17.066667 38.4 38.4s-17.066667 38.4-38.4 38.4h-34.133333v59.733334c0 17.066667-17.066667 34.133333-38.4 34.133333zM768 567.466667h106.666667V426.666667L768 567.466667zM533.333333 597.333333c-46.933333 0-85.333333-25.6-119.466666-68.266666-29.866667-38.4-42.666667-93.866667-42.666667-145.066667 0-55.466667 17.066667-106.666667 42.666667-145.066667 29.866667-42.666667 72.533333-68.266667 119.466666-68.266666 46.933333 0 85.333333 25.6 119.466667 68.266666 29.866667 38.4 42.666667 93.866667 42.666667 145.066667 0 55.466667-17.066667 106.666667-42.666667 145.066667-34.133333 46.933333-76.8 68.266667-119.466667 68.266666z m0-362.666666c-55.466667 0-98.133333 68.266667-98.133333 149.333333s46.933333 149.333333 98.133333 149.333333c55.466667 0 98.133333-68.266667 98.133334-149.333333s-46.933333-149.333333-98.133334-149.333333z',
              fill: '#978CFF'
            }),
            h('path', {
              d: 'M354.133333 691.2a162.133333 21.333333 0 1 0 324.266667 0 162.133333 21.333333 0 1 0-324.266667 0Z',
              fill: '#E3E5FC'
            }),
            h('path', {
              d: 'M8.533333 832a162.133333 21.333333 0 1 0 324.266667 0 162.133333 21.333333 0 1 0-324.266667 0Z',
              fill: '#E3E5FC'
            }),
            h('path', {
              d: 'M661.333333 797.866667a162.133333 21.333333 0 1 0 324.266667 0 162.133333 21.333333 0 1 0-324.266667 0Z',
              fill: '#E3E5FC'
            })
          ]
        )
      ])
    }
  },

  'app-user': {
    iconReader: () => {
      return h('i', [
        h(
          'svg',
          {
            viewBox: '0 0 24 24',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M14 12.3333H10C8.15905 12.3333 6 13.621 6 15.9333V17.7333C6 18.0647 6.29848 18.3333 6.66667 18.3333H17.3333C17.7015 18.3333 18 18.0647 18 17.7333V15.9333C18 13.619 15.841 12.3333 14 12.3333Z',
              fill: 'currentColor'
            }),
            h('path', {
              d: 'M8.66667 8.33333C8.66667 10.1743 10.1591 11.6667 12 11.6667C13.8409 11.6667 15.3333 10.1743 15.3333 8.33333C15.3333 6.49238 13.8409 5 12 5C10.1591 5 8.66667 6.49238 8.66667 8.33333Z',
              fill: 'currentColor'
            })
          ]
        )
      ])
    }
  },

  'app-add-users': {
    iconReader: () => {
      return h('i', [
        h(
          'svg',
          {
            viewBox: '0 0 20 20',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M6.24984 5.41667C6.24984 6.7975 7.37067 7.91667 8.74984 7.91667C10.129 7.91667 11.2498 6.7975 11.2498 5.41667C11.2498 4.03583 10.129 2.91667 8.74984 2.91667C7.37067 2.91667 6.24984 4.03583 6.24984 5.41667ZM8.74984 1.25C11.0498 1.25 12.9165 3.11542 12.9165 5.41667C12.9165 7.71792 11.0498 9.58333 8.74984 9.58333C6.44984 9.58333 4.58317 7.71792 4.58317 5.41667C4.58317 3.11542 6.44984 1.25 8.74984 1.25ZM3.43734 15C3.37067 15.2663 3.33317 15.5454 3.33317 15.8333V16.6667H10.854C11.0841 16.6667 11.2706 16.8532 11.2706 17.0833V17.9167C11.2706 18.1468 11.0841 18.3333 10.854 18.3333H2.49984C2.0415 18.3333 1.6665 17.9604 1.6665 17.5V15.8333C1.6665 13.0721 3.904 10.8333 6.6665 10.8333H10.854C11.0841 10.8333 11.2706 11.0199 11.2706 11.25V12.0833C11.2706 12.3135 11.0841 12.5 10.854 12.5H6.6665C5.11234 12.5 3.80817 13.5625 3.43734 15ZM15.4165 11.6667C15.6466 11.6667 15.8332 11.8532 15.8332 12.0833V14.1667H17.9165C18.1466 14.1667 18.3332 14.3532 18.3332 14.5833V15.4167C18.3332 15.6468 18.1466 15.8333 17.9165 15.8333H15.8332V17.9167C15.8332 18.1468 15.6466 18.3333 15.4165 18.3333H14.5832C14.3531 18.3333 14.1665 18.1468 14.1665 17.9167V15.8333H12.0832C11.8531 15.8333 11.6665 15.6468 11.6665 15.4167V14.5833C11.6665 14.3532 11.8531 14.1667 12.0832 14.1667H14.1665V12.0833C14.1665 11.8532 14.3531 11.6667 14.5832 11.6667H15.4165Z',
              fill: 'currentColor'
            })
          ]
        )
      ])
    }
  },

  'app-dataset': {
    iconReader: () => {
      return h('i', [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M859.5 193H446.939c-1.851-53.25-45.747-96-99.439-96h-183C109.635 97 65 141.635 65 196.5v632c0 54.864 44.635 99.5 99.5 99.5h695c54.864 0 99.5-44.636 99.5-99.5v-536c0-54.865-44.636-99.5-99.5-99.5z m-695-33h183c20.126 0 36.5 16.374 36.5 36.5v28c0 17.397 14.103 31.5 31.5 31.5h444c20.126 0 36.5 16.374 36.5 36.5V321H128V196.5c0-20.126 16.374-36.5 36.5-36.5z m695 705h-695c-20.126 0-36.5-16.374-36.5-36.5V384h768v444.5c0 20.126-16.374 36.5-36.5 36.5z',
              fill: 'currentColor'
            })
          ]
        )
      ])
    }
  },
  'app-applicaiton': {
    iconReader: () => {
      return h('i', [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M951.901 244.015l-413.3-238.57a33.606 33.606 0 0 0-33.909 0L91.3 244.016c-10.426 6.12-16.99 17.221-16.99 29.346v477.184c0 12.149 6.447 23.343 16.99 29.37l413.3 238.662c5.213 2.933 11.101 4.515 16.99 4.515 5.794 0 11.775-1.582 16.988-4.515l413.3-238.661c10.427-6.121 16.99-17.222 16.99-29.37V273.36a33.908 33.908 0 0 0-16.966-29.346zM892.23 726.016l-370.618 213.97-370.642-213.97v-427.87L521.588 84.178l370.642 213.97v427.869z m8.797 5.073M285.207 348.393a34.095 34.095 0 0 0-46.336 12.567 33.908 33.908 0 0 0 12.474 46.36l235.94 136.215v269.498a33.745 33.745 0 0 0 33.884 33.885 33.745 33.745 0 0 0 33.886-33.885V543.977L791.9 407.227a34.025 34.025 0 0 0 12.451-46.36 34.025 34.025 0 0 0-46.336-12.474l-236.404 136.54-236.405-136.54z m0 0',
              fill: 'currentColor'
            })
          ]
        )
      ])
    }
  },

  'app-exit': {
    iconReader: () => {
      return h('i', [
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M874.666667 855.744a19.093333 19.093333 0 0 1-19.136 18.922667H168.469333A19.2 19.2 0 0 1 149.333333 855.530667V168.469333A19.2 19.2 0 0 1 168.469333 149.333333h687.061334c10.581333 0 19.136 8.533333 19.136 18.922667V320h42.666666V168.256A61.717333 61.717333 0 0 0 855.530667 106.666667H168.469333A61.866667 61.866667 0 0 0 106.666667 168.469333v687.061334A61.866667 61.866667 0 0 0 168.469333 917.333333h687.061334A61.76 61.76 0 0 0 917.333333 855.744V704h-42.666666v151.744zM851.84 533.333333l-131.797333 131.754667a21.141333 21.141333 0 0 0 0.213333 29.973333 21.141333 21.141333 0 0 0 29.973333 0.192l165.589334-165.589333a20.821333 20.821333 0 0 0 6.122666-14.976 21.44 21.44 0 0 0-6.314666-14.997333l-168.533334-168.533334a21.141333 21.141333 0 0 0-29.952-0.213333 21.141333 21.141333 0 0 0 0.213334 29.973333L847.296 490.666667H469.333333v42.666666h382.506667z',
              fill: 'currentColor'
            })
          ]
        )
      ])
    }
  },

  'app-team': {
    iconReader: () => {
      return h('i', [
        h(
          'svg',
          {
            viewBox: '0 0 20 20',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M7.08317 10C9.15424 10 10.8332 8.32107 10.8332 6.25C10.8332 4.17893 9.15424 2.5 7.08317 2.5C5.0121 2.5 3.33317 4.17893 3.33317 6.25C3.33317 8.32107 5.0121 10 7.08317 10Z',
              fill: 'currentColor'
            }),
            h('path', {
              d: 'M1.24984 18.3333C0.7896 18.3333 0.416504 17.9602 0.416504 17.5V15.8889C0.416504 13.0968 2.76035 10.8333 5.47333 10.8333H8.70065C11.4136 10.8333 13.7498 13.0968 13.7498 15.8889V17.5C13.7498 17.9602 13.3767 18.3333 12.9165 18.3333H1.24984Z',
              fill: 'currentColor'
            }),
            h('path', {
              d: 'M15.4165 17.5V17.2535C15.4165 15.3267 15.4165 13.3333 13.7498 12.0833C13.8196 12.0773 13.9366 12.0794 14.0491 12.0814C14.1036 12.0824 14.157 12.0833 14.2034 12.0833H15.8332C17.8679 12.0833 19.5832 13.3643 19.5832 15.4583V16.875C19.5832 17.2202 19.3033 17.5 18.9582 17.5H15.4165Z',
              fill: 'currentColor'
            }),
            h('path', {
              d: 'M14.5832 10.8333C15.9639 10.8333 17.0832 9.71405 17.0832 8.33333C17.0832 6.95262 15.9639 5.83333 14.5832 5.83333C13.2025 5.83333 12.0832 6.95262 12.0832 8.33333C12.0832 9.71405 13.2025 10.8333 14.5832 10.8333Z',
              fill: 'currentColor'
            })
          ]
        )
      ])
    }
  },
  'app-send': {
    iconReader: () => {
      return h('i', [
        h(
          'svg',
          {
            viewBox: '0 0 24 24',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M20.1716 1.68834C20.6753 1.53273 21.0458 2.16193 20.6652 2.52691L12.2658 10.5836C11.0058 11.7921 9.32754 12.4668 7.5817 12.4668C5.68044 12.4668 3.8669 11.667 2.58487 10.263L1.45879 9.02985C1.33225 8.90313 1.24137 8.74527 1.19534 8.5722C1.14931 8.39913 1.14974 8.21698 1.19661 8.04413C1.24347 7.87129 1.3351 7.71386 1.46225 7.58775C1.5894 7.46164 1.74757 7.3713 1.92079 7.32585L20.1716 1.68834Z',
              fill: 'currentColor'
            }),
            h('path', {
              d: 'M12 16.1851C12 14.2766 12.7377 12.4419 14.0588 11.0646L21.4664 3.34177C21.8268 2.96601 22.4499 3.32266 22.3084 3.82374L17.143 22.1182C17.0971 22.291 17.0064 22.4487 16.8801 22.5754C16.7538 22.7021 16.5964 22.7932 16.4237 22.8397C16.251 22.8862 16.0691 22.8864 15.8964 22.8402C15.7236 22.794 15.566 22.7031 15.4395 22.5767L14.4439 21.6791C12.8881 20.2764 12 18.2799 12 16.1851Z',
              fill: 'currentColor'
            })
          ]
        )
      ])
    }
  },
  'app-view': {
    iconReader: () => {
      return h('i', [
        h(
          'svg',
          {
            viewBox: '0 0 16 12',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M6.9649 8.5176L10.8075 6.59629C10.9365 6.53178 11.0412 6.42717 11.1057 6.29815C11.2703 5.96883 11.1368 5.56838 10.8075 5.40372L6.9649 3.48241C6.87233 3.43612 6.77025 3.41203 6.66675 3.41203C6.29856 3.41203 6.00009 3.71051 6.00009 4.07869V7.92132C6.00009 8.02481 6.02418 8.12689 6.07047 8.21946C6.23513 8.54878 6.63558 8.68226 6.9649 8.5176Z',
              fill: 'currentColor'
            }),
            h('path', {
              d: 'M15.3334 0.75C15.3334 0.335786 15.0349 0 14.6667 0H1.33341C0.965225 0 0.666748 0.335786 0.666748 0.75V11.25C0.666748 11.6642 0.965225 12 1.33341 12H14.6667C15.0349 12 15.3334 11.6642 15.3334 11.25V0.75ZM2.00008 1.5H14.0001V10.5H2.00008V1.5Z',
              fill: 'currentColor'
            })
          ]
        )
      ])
    }
  },
  'app-hide-password': {
    iconReader: () => {
      return h('i', [
        h(
          'svg',
          {
            viewBox: '0 0 16 16',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg'
          },
          [
            h('path', {
              d: 'M7.99998 10.0002C7.56178 10.0002 7.13299 9.96572 6.7171 9.8997L6.38511 11.1387C6.33746 11.3165 6.15468 11.4221 5.97686 11.3744L5.33291 11.2019C5.15509 11.1542 5.04956 10.9714 5.09721 10.7936L5.4223 9.58034C4.87988 9.3961 4.37072 9.15543 3.90466 8.86678L2.84516 9.92629C2.71498 10.0565 2.50393 10.0565 2.37375 9.92629L1.90235 9.45489C1.77217 9.32471 1.77217 9.11366 1.90235 8.98348L2.8354 8.05043C2.35399 7.59967 1.95185 7.08569 1.64787 6.5247C1.64468 6.51881 1.64138 6.51264 1.63799 6.50624C1.51335 6.27086 1.55999 5.97623 1.75685 5.79684C1.92026 5.64792 2.03572 5.54659 2.13615 5.44616C2.14513 5.43717 2.15496 5.42715 2.16545 5.41632C2.31084 5.26609 2.55878 5.32201 2.64392 5.51294C3.47403 7.37447 5.46187 8.6669 7.99998 8.6669C10.4318 8.6669 12.4662 7.40921 13.2827 5.68288C13.3039 5.63796 13.3277 5.58139 13.3516 5.52133C13.4274 5.33113 13.6738 5.27374 13.8186 5.41849C13.9256 5.52556 14.0684 5.66833 14.2469 5.84678C14.4233 6.02319 14.471 6.29259 14.3557 6.51383C14.3277 6.56764 14.3004 6.61834 14.2771 6.65865C13.9636 7.20157 13.5569 7.69799 13.0751 8.13259L13.926 8.98348C14.0562 9.11366 14.0562 9.32471 13.926 9.45489L13.4546 9.92629C13.3245 10.0565 13.1134 10.0565 12.9832 9.92629L11.9885 8.93161C11.5518 9.1916 11.0789 9.41007 10.5777 9.58034L10.9027 10.7936C10.9504 10.9714 10.8449 11.1542 10.667 11.2019L10.0231 11.3744C9.84527 11.4221 9.66249 11.3165 9.61485 11.1387L9.28285 9.8997C8.86696 9.96572 8.43817 10.0002 7.99998 10.0002Z',
              fill: 'currentColor'
            })
          ]
        )
      ])
    }
  }
}
