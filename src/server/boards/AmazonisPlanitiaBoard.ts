import {SpaceBonus} from '../../common/boards/SpaceBonus';
import {BoardBuilder} from './BoardBuilder';
import {Random} from '../../common/utils/Random';
import {GameOptions} from '../game/GameOptions';
import {MarsBoard} from './MarsBoard';

// Amazonis Planitia is one hex-ring larger than the standard maps: eleven rows of tile counts
// [6,7,8,9,10,11,10,9,8,7,6] for 91 spaces (the standard maps are nine rows / 61 spaces).
export const AMAZONIS_PLANITIA_TILES_PER_ROW: ReadonlyArray<number> = [6, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6];

export class AmazonisPlanitiaBoard extends MarsBoard {
  public static newInstance(gameOptions: GameOptions, rng: Random): AmazonisPlanitiaBoard {
    const builder = new BoardBuilder(gameOptions, rng, AMAZONIS_PLANITIA_TILES_PER_ROW);

    const PLANT = SpaceBonus.PLANT;
    const STEEL = SpaceBonus.STEEL;
    const DRAW_CARD = SpaceBonus.DRAW_CARD;
    const TITANIUM = SpaceBonus.TITANIUM;
    const HEAT = SpaceBonus.HEAT;

    // y=0
    builder.land(STEEL, STEEL).ocean(STEEL).land().ocean(DRAW_CARD).land().land();
    // y=1
    builder.land().volcanic(STEEL).land().land().land().land().ocean(DRAW_CARD, DRAW_CARD);
    // y=2
    builder.land(STEEL).land().land().land().land().land().land().land(STEEL);
    // y=3
    builder.land(PLANT).land(PLANT).land(PLANT).land(PLANT).land(PLANT).land(PLANT).land(PLANT).land(PLANT).ocean(PLANT, PLANT);
    // y=4
    builder.land(PLANT, PLANT).land(PLANT).land(PLANT).land(PLANT).ocean(PLANT, PLANT).ocean(PLANT, PLANT)
      .land(PLANT).land(PLANT).land(PLANT).land(PLANT, PLANT);
    // y=5
    builder.land(PLANT).land(PLANT, PLANT).land(PLANT).land(PLANT).ocean(PLANT).ocean(PLANT).ocean(PLANT)
      .land(PLANT).land(PLANT).land(PLANT, PLANT).land(PLANT);
    // y=6
    builder.land().land().land().land().land().land(PLANT).land().land().land().land();
    // y=7
    builder.land(STEEL, STEEL).land().land(DRAW_CARD).land(DRAW_CARD).land().land(TITANIUM).land().land().ocean(PLANT);
    // y=8
    builder.land(STEEL).land(STEEL, STEEL).land().land().ocean(TITANIUM, TITANIUM).land().land().land();
    // y=9
    builder.land(TITANIUM).land().volcanic(DRAW_CARD).land().land().land().ocean(PLANT, PLANT);
    // y=10
    builder.land(STEEL).land(HEAT, HEAT).land().land(HEAT, HEAT).land().ocean(TITANIUM);

    const spaces = builder.build();
    return new AmazonisPlanitiaBoard(spaces);
  }
}
