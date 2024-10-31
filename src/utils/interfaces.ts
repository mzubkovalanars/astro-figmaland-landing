import type { ArbitraryTypedObject, PortableTextBlock, TypedObject } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';

export interface IImage extends ImageAsset {
  caption: string;
}

export type PortableTextValue<
  Value extends TypedObject = PortableTextBlock | ArbitraryTypedObject,
> = Value;

export interface Product {
  _type: 'product';
  _id: number;
  _createdAt: string;
  slug: Slug;
  name: string;
  description: string;
  price: number;
  image: IImage;
  rating: number;
  brand: string;
  color?: string;
  overview: PortableTextValue | PortableTextValue[];
  tech_specs: {
    connectivity?: string;
    wireless?: boolean;
    compatibility?: string;
    resolution?: string;
    sensor?: string;
    storage?: string;
    storage_capacity?: string;
    ram?: string;
  };
  physical_specs: {
    weight?: string;
    material?: string;
    thickness?: string;
    adjustable_height?: boolean;
    adjustable_length?: boolean;
    screen_size?: string;
  };
  performance_specs: {
    battery_life?: string;
    power?: string;
    output_power?: string;
    suction_power?: string;
    range?: string;
  };
  features_specs: {
    waterproof?: boolean;
    voice_control?: boolean;
    foldable?: boolean;
    heart_rate_monitor?: boolean;
    wireless_charging_standard?: string;
  };
  display?: string; //TODO
  games_included?: number;
  mapping_technology?: boolean;
  interface?: string;
  max_speed?: string;
  weight_capacity?: string;
  speeds?: string;
  dpi_range?: string;
  buttons?: number;
  incline_levels?: number;
  capacity?: string;
  solar_panel_power?: string;
  brushing_modes?: string[];
  timer?: boolean;
  plants_included?: string[];
  pot_material?: string;
  pot_color?: string;
  video_resolution?: string;
  field_of_view?: string;
  max_height?: string;
  cooking_modes?: string[];
  number_of_cameras?: number;
  night_vision?: boolean;
  pieces_included?: number;
  levels_of_resistance?: string[];
  lumbar_support?: boolean;
  tools_included?: string[];
  number_of_lights?: number;
  light_color?: string;
  size?: string;
  active_area?: string;
  pen_pressure_levels?: number;
  brightness?: string;
  attachments?: string[];
  compatible_devices?: string[];
  color_options?: string[];
  components_included?: string[];
  activities_tracked?: string[];
}
