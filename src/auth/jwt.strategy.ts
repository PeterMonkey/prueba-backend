import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { JwtContants } from './constants/jwt-constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpitarion: false,
            secretOrkey: JwtContants.secret
        })
    }

    async validate(payload: any) {
        return { id: payload.id, email: payload.email };
      }
}